'use strict';

var paths = require('./paths.js');

module.exports = {

    // CSS filenames
    datasvgcss: 'icons.{theme}.svg.css', //overridden (per theme)
    datapngcss: 'icons.{theme}.png.css', //overridden (per theme)
    urlpngcss: 'icons.{theme}.fallback.css', //overridden (per theme)

    dest: paths.icons.dest, //overridden (per theme)

    // grunticon loader code snippet filename
    loadersnippet: 'grunticon.loader.js',

    // Include loader code for SVG markup embedding
    enhanceSVG: true,

    // Make markup embedding work across domains (if CSS hosted externally)
    corsEmbed: false,

    // folder name (within dest) for png output
    pngfolder: 'png/{theme}/', //overridden (per theme)

    // prefix for CSS classnames
    cssprefix: '.',

    defaultWidth: '32px',
    defaultHeight: '32px',

    customselectors: {
        core: {
            'ff_icon-page-up-open-white': ['.ff_module-dropdown-button__icon--is-open'],
            'ff_icon-page-down-open-white': ['.ff_module-dropdown-button__icon--is-enabled'],
            'ff_icon-page-up-open-blue': [
                '.ff_module-dropdown-button__icon--link.ff_module-dropdown-button__icon--is-open',
                '.ff_module-dropdown-button__icon--link-right.ff_module-dropdown-button__icon--is-open'],
            'ff_icon-page-down-open-blue': [
                '.ff_module-dropdown-button__icon--link.ff_module-dropdown-button__icon--is-enabled',
                '.ff_module-dropdown-button__icon--link-right.ff_module-dropdown-button__icon--is-enabled',
                '.ff_module-dropdown-button__icon--tertiary.ff_module-dropdown-button__icon--is-enabled',
                '.ff_module-dropdown-button__icon--tertiary-right.ff_module-dropdown-button__icon--is-enabled',
                '.ff_module-dropdown-button__icon--tertiary-compact.ff_module-dropdown-button__icon--is-enabled',
                '.ff_module-dropdown-button__icon--tertiary-compact-right.ff_module-dropdown-button__icon--is-enabled',
                '.ff_module-dropdown-button__icon--tertiary-compact-right-widelist.ff_module-dropdown-button__icon--is-enabled'],
            'ff_icon-response-edit-darkgrey': [
                '.ff_icon-response-edit.ff_module-dropdown-button__icon-alt',
                '.ff_icon-response-edit.ff_module-dropdown-button__icon-alt--is-enabled'
            ],
            'ff_icon-response-edit-blue': ['.ff_icon-response-edit.ff_module-dropdown-button__icon-alt.ff_module-dropdown-button__icon-alt--is-open'],
            'ff_icon-response-error-error': ['.ff_icon-response-errored']
        },
        melody: {
            'ff_icon-page-up-open-white': ['.ff_module-dropdown-button__icon--is-open'],
            'ff_icon-page-down-open-white': ['.ff_module-dropdown-button__icon--is-enabled'],
            'ff_icon-page-up-open-blue': [
                '.ff_module-dropdown-button__icon--link.ff_module-dropdown-button__icon--is-open',
                '.ff_module-dropdown-button__icon--link-right.ff_module-dropdown-button__icon--is-open'],
            'ff_icon-page-down-open-blue': [
                '.ff_module-dropdown-button__icon--link.ff_module-dropdown-button__icon--is-enabled',
                '.ff_module-dropdown-button__icon--link-right.ff_module-dropdown-button__icon--is-enabled',
                '.ff_module-dropdown-button__icon--tertiary.ff_module-dropdown-button__icon--is-enabled',
                '.ff_module-dropdown-button__icon--tertiary-right.ff_module-dropdown-button__icon--is-enabled',
                '.ff_module-dropdown-button__icon--tertiary-compact.ff_module-dropdown-button__icon--is-enabled',
                '.ff_module-dropdown-button__icon--tertiary-compact-right.ff_module-dropdown-button__icon--is-enabled',
                '.ff_module-dropdown-button__icon--tertiary-compact-right-widelist.ff_module-dropdown-button__icon--is-enabled'],
            'ff_icon-response-edit-darkgrey': [
                '.ff_icon-response-edit.ff_module-dropdown-button__icon-alt',
                '.ff_icon-response-edit.ff_module-dropdown-button__icon-alt--is-enabled'
            ],
            'ff_icon-response-edit-blue': ['.ff_icon-response-edit.ff_module-dropdown-button__icon-alt.ff_module-dropdown-button__icon-alt--is-open'],
            'ff_icon-response-error-error': ['.ff_icon-response-errored']
        },
        nautilus: {
            'ff_icon-page-up-open-blue': ['.ff_module-dropdown-button__icon--is-open'],
            'ff_icon-page-down-open-blue': ['.ff_module-dropdown-button__icon--is-enabled'],
            'ff_icon-response-edit-darkgrey': [
                '.ff_icon-response-edit.ff_module-dropdown-button__icon-alt',
                '.ff_icon-response-edit.ff_module-dropdown-button__icon-alt--is-enabled'
            ],
            'ff_icon-response-edit-blue': ['.ff_icon-response-edit.ff_module-dropdown-button__icon-alt.ff_module-dropdown-button__icon-alt--is-open'],
            'ff_icon-response-error-error': ['.ff_icon-response-errored']
        }
    },

    // define vars that can be used in filenames if desirable,
    // like foo.colors-primary-secondary.svg
    colors: {
        core: {
            blue: '#297FCF',
            brightblue: '#0085E6',
            grey: '#A9AEB6',
            darkgrey: '#888888',
            extradarkgrey: '#444444',
            white: '#FFF',
            lightblue: '#add8e6',
            greyblue: '#7F9CB5',
            success: '#98CE1E',
            error: '#D35447',
            notify: '#FFCD00'
        },
        melody: {
            blue: '#297FCF',
            brightblue: '#0085E6',
            grey: '#A9AEB6',
            darkgrey: '#888888',
            extradarkgrey: '#444444',
            white: '#FFF',
            lightblue: '#add8e6',
            greyblue: '#7F9CB5',
            success: '#98CE1E',
            error: '#D35447',
            notify: '#FFCD00'
        },
        nautilus: {
            blue: '#297FCF',
            darkblue: '#2165A4',
            brightblue: '#0085E6',
            grey: '#A9AEB6',
            darkgrey: '#888888',
            extradarkgrey: '#444444',
            white: '#FFF',
            lightblue: '#add8e6',
            greyblue: '#7F9CB5',
            success: '#98CE1E',
            error: '#D35447',
            notify: '#FFCD00'
        },
        folio: {
            blue: '#297FCF',
            darkblue: '#2165A4',
            brightblue: '#0085E6',
            grey: '#A9AEB6',
            darkgrey: '#888888',
            extradarkgrey: '#444444',
            white: '#FFF',
            lightblue: '#add8e6',
            greyblue: '#7F9CB5',
            success: '#98CE1E',
            error: '#D35447',
            notify: '#FFCD00'
        },
    },

    dynamicColorOnly: false,

    // css file path prefix
    // this defaults to '/' and will be placed before the 'dest' path
    // when stylesheets are loaded. It allows root-relative referencing
    // of the CSS. If you don't want a prefix path, set to to '
    cssbasepath: '/',

    template: paths.icons.templates,
    previewTemplate: paths.icons.previewTemplate,

    compressPNG: true
};