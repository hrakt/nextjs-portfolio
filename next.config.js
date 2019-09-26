const withSass = require("@zeit/next-sass"); // Add this declaration
const withImages = require("next-images");
module.exports = withImages(
    withSass({
        cssModules: true
    })
);
