const path = require('path')
const HTMLWebpackConfig = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = {

    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 4200
    },

    plugins: [
        new HTMLWebpackConfig({
            filename: 'index.html',
            template: './src/index.html',

        }),
        new HTMLWebpackConfig({
            filename: 'second-page.html',
            template: './src/second-page.html',

        }),
        new HTMLWebpackConfig({
            filename: 'third-page.html',
            template: './src/third-page.html',

        }),
        new HTMLWebpackConfig({
            filename: 'fourth-page.html',
            template: './src/fourth-page.html',

        }),

        new CleanWebpackPlugin()
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|otf|jpg|jpeg)$/,
                use: 'url-loader?limit=100000'
            }
        ]
    }
}