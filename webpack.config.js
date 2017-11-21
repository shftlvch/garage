let path = require("path");
let LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: {
        app: ["./client/index.js"]
    },
    output: {
        path: path.resolve(__dirname, "client/dist"),
        filename: "bundle.js"
    },
    context: __dirname,
    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                enforce: 'pre',
                use: [
                    {
                        loader: 'eslint-loader',
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: 'webpack-bem-loader',
                        options: {
                            levels: [
                                `${__dirname}/client/components/common`,
                                `${__dirname}/client/components/desktop`
                            ],
                            techs: ['js', 'css'],
                        },
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react', 'es2015'],
                            cacheDirectory: true,
                        }
                    },
                ],
            },
            {
                exclude: [
                    /\.html$/,
                    /\.(js|jsx)$/,
                    /\.css$/,
                    /\.json$/,
                    /\.bmp$/,
                    /\.gif$/,
                    /\.jpe?g$/,
                    /\.png$/,
                    /\.inline\.\w+$/,
                ],
                loader: 'file-loader',
                options: {
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]',
                },
            },
            {
                test: [/\.css$/, /\.pcss$/],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {loader: 'postcss-loader'},
                ],
            },]

    },
    plugins: [
        new LiveReloadPlugin({appendScriptTag: true})
    ]
};