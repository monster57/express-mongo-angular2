module.exports = {
    entry: {
        'vendor': './app/vendor.ts',
        'main': './app/main.ts'
    },
    output: {
        filename: './public/build/[name].js'
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts'
            },
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: [
                    // these packages have problems with their sourcemaps
                    './node_modules/rxjs',
                    './node_modules/@angular'
                ]
            }
        ]
    }
}