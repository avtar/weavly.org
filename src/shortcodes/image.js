"use strict";

// const eleventyImage = require("@11ty/eleventy-img");

module.exports = async (src, alt, width, height) => {
    const w = parseInt(width, 10);
    const h = parseInt(height, 10);

    return `<picture>
    <source srcset="${src}?nf_resize=smartcrop&w=${w}&h=${h}" media="(min-width: 768px)">
    <img src="${src}?nf_resize=smartcrop&w=${w / 2}&h=${h / 2}" alt="${alt}" width="${width}" height="${height}" />
</picture>`;
};
