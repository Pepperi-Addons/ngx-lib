const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        plugin: "./dist/out-tsc/projects/web-app/src/main.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "../../webappthirdparty/projects/plugin-themes_ng9/publish/editors/themes.plugin.bundle.js", // "[name].js",
        libraryTarget: "system"
    },
    devtool: "sourcemap"
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             use: [
    //                 "style-loader",
    //                 'css-loader'
    //             ]
    //         }
    //     ]
    // },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //             template: "./index.html"
    //         }
    //     )
    // ]
};