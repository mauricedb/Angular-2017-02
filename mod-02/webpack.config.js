var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: './main.ts',
    output: {
        filename:'main.bundle.js',
        path: 'bundle'
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin()
    ],
     resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }

}