# 1.0.0 (28/06/2016)

## Updates
- Updated major version as previous update contained breaking changes
- Updates grunticon loading in the patternlib to ensure themes are loaded correctly.
- Enables embedded svg files so that css can be applied directly to the inline element without having to pre-define the colours
    
    (see blocks/core/ff_container/ff_container-landing-section/ff_container-landing-section.xsl)

    **NB**: it may be necessary to clear cookies on localhost after this change, for the theme select to work properly

    The script does attempt to detect for the old version of the cookie, but if it should fail, ie. the theme selector is empty and there is no theme selected, try clearing cookies

# 0.2.6 (20/06/2016)

## Breaking changes
Changed `gulp export` to exclude bundled js file (aka `blocks.js`) from main `export` directory, and instead export unbundled js files to separate directory, by default, `export-js/`.
Added `--export-js-path` argument to `gulp export` task, to set location of exported unbundled js files.
Previous `--export-path` argument still operates as expected, aside from aforementioned js files change.

# 0.2.5 (18/04/2016)

## Updates
- Added [grunticon customselector](https://github.com/filamentgroup/grunticon#optionscustomselectors) support for generating icon classes based on state/modifier rather than just color.
- Added per-theme icon color config support.
- Added eslintrc file and task in preparation for adding linting step before test command.

# 0.2.4 (31/03/2016)

## Breaking changes
Swapped the deprecated `minify-css` package for `clean-css`. Run `npm-install` to update package references.

# 0.2.3 (9/03/2016)

## Breaking changes
- JSX support added; webpack version downgraded from the beta-2 branch to support this. As a result, **it is necessary to remove and re-install node_modules directory.**


# 0.2.2 (16/02/2016)

## Breaking changes
- blocks/core/_shared/index.js and all references removed
- All modules now automatically include their required js files, which are looked for in the following order of preference:
    - `_[block-name]-renderer.js`
    - `[block-name].js`

## Features
- New swig filters added to `augmentedSwig.js` to support the above changes: 
    - `jsEntry` (the name of the entry file, to access properties on `ffBlocks`) 
    - `jsUrlPath` (the path to the entry file relative to `wwwroot`)

# 0.2.1 (15/02/2016)

## Breaking changes
- ff_module-profile-response-button 
    - `isSelected` prop renamed to `uiState`, with three defined css values: `is-selected`, `is-reviewed`, `is-updated` (default)
    - `status` prop added
    - `mark` prop added
