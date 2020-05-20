const webpack = require("webpack");
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require("vue-loader");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
    entry: ["./_process/js/app.js", "./_process/js/script.js"],
    plugins: [
        // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
        //new CleanWebpackPlugin(),
        new FaviconsWebpackPlugin({
            mode: 'webapp', // optional can be 'webapp' or 'light' - 'webapp' by default
            devMode: 'webapp', // optional can be 'webapp' or 'light' - 'light' by default 
        }),
        new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" }),
        new VueLoaderPlugin(),
    ],
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
        //filename: '[name].bundle.js',
        filename: "js/script.js"
        //path: path.resolve(__dirname, 'dist'),
    },
};