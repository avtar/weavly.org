/*
Copyright the Trivet copyright holders.

See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/codelearncreate/weavly.org/raw/main/AUTHORS.md.

Licensed under the New BSD license. You may not use this file except in compliance with this License.

You may obtain a copy of the New BSD License at
https://github.com/codelearncreate/weavly.org/raw/main/LICENSE.md.
*/

"use strict";
const htmlmin = require("html-minifier");

module.exports = function htmlMinTransform(value, outputPath) {
    if (outputPath && outputPath.includes(".html")) {
        let minified = htmlmin.minify(value, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true
        });
        return minified;
    }
    return value;
};
