const path = require("path");
const HtmlWebpagePlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebpagePlugin({
    template: "./src/index.html",
    filename: "./index.html"
})

module.exports = {
    entry: "./src",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    plugins: [htmlPlugin],
    devServer: {
        port: 3000,
    }
};