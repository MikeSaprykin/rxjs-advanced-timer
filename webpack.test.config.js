module.exports = {

    devtool: 'inline-source-map',

        resolve: {
    extensions: ['.ts', '.js']
},

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: 'awesome-typescript-loader'
                }
            }
        ]
    }

};