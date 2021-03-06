'use strict';

var child_process = require('child_process'),
    crypto = require('crypto'),
    path = require('path'),
    bluebird = require('bluebird'),
    findit = require('findit2'),
    readFile = bluebird.promisify(require('fs').readFile),
    writeFile = bluebird.promisify(require('fs').writeFile),
    unlink = bluebird.promisify(require('fs').unlink);



module.exports = function(gulp, plugins, config) {


    function readNormalisedFile(file) {
        var fileType = fileTypes[path.extname(file)];
        if (fileType === "text") {
            return readFile(file, "utf8")
                .then(stripBom)
                .then(normaliseLineEndings)
                .then(function(value) {
                    return new Buffer(value, "utf8");
                })
        } else if (fileType === "binary") {
            return readFile(file);
        } else {
            return bluebird.reject("Could not determine file type of " + file);
        }
    }

    function stripBom(value) {
        if (value.charCodeAt(0) === 0xfeff) {
            return value.slice(1);
        } else {
            return value;
        }
    }

    function normaliseLineEndings(value) {
        return value.replace(/\r\n/g, "\n");
    }

    var fileTypes = {
        ".css": "text",
        ".js": "text",
        ".less": "text",
        ".png": "binary",
        ".xsl": "text",
        ".gif": "binary",
        ".jsx": "text"
    };

    function gitCommit(callback) {
        return bluebird.resolve([
            exec("git rev-parse --verify HEAD"),
            exec("git status --porcelain")
        ]).spread(function(revParseResult, statusResult) {
            var commit = revParseResult.stdout.trim();
            var isDirty = /\S/.test(statusResult.stdout);
            return commit + (isDirty ? "-dirty" : "");
        });
    }

    function exec(command, options) {
        return bluebird.fromCallback(function(callback) {
            child_process.exec(command, options, function(error, stdout, stderr) {
                callback(error, {
                    stdout: stdout,
                    stderr: stderr
                });
            });
        });
    }

    return function(exportPath, hashFileName) {

        function hashExportFiles() {
            return bluebird.props(new bluebird(function(resolve, reject) {
                var files = {};
                var finder = findit(exportPath);
                finder.on("file", function(file, stat) {
                    var normalisedPath = path.relative(exportPath, file).replace(/\\/g, "/");
                    files[normalisedPath] = readNormalisedFile(file).then(function(contents) {
                        var hash = crypto.createHash("sha1");
                        hash.update(contents);
                        return hash.digest("hex");
                    });
                });
                finder.on("end", function() {
                    resolve(files);
                });
                finder.on("error", reject);
            }));
        }


        return function(cb) {
            var infoPath = path.join(exportPath, hashFileName);
            unlink(infoPath).catch(function(error) {
                if (error.code === "ENOENT") {
                    return null;
                } else {
                    return bluebird.reject(error);
                }
            }).then(function() {
                return [
                    gitCommit(),
                    hashExportFiles()
                ]
            }).spread(function(commit, exportHashes) {
                var info = {
                    commit: commit,
                    files: exportHashes
                };
                return writeFile(infoPath, JSON.stringify(info, null, 4));
            }).asCallback(cb);
        }
    }


}
