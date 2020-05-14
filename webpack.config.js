const path = require("path");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    mode: "development",
    watch: false,
    entry: ["./_process/js/app.js", "./_process/js/script.js"],

    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "_site/js/"),
        filename: "script.js"
    },
    plugins: [
        new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" }),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify('5fa3b9'),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: '1+1',
            'typeof window': JSON.stringify('object'),
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
};
