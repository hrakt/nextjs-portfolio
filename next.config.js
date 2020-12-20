const withSass = require("@zeit/next-sass"); // Add this declaration
const withImages = require("next-images");
module.exports = withImages(
    withSass({
        cssModules: true,
        cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: "[local]___[hash:base64:5]"
        }
    })
); 