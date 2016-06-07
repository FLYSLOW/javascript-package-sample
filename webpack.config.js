module.exports = [{
    context: process.cwd(),
    entry: {
        target: ['./entry1', './entry2'],
    },
    output: {
        publicPath: '/assets/',
        path: path.resolve('./build'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js',
        sourceMapFilename: '[file].map',
        library: 'Library',
        libraryTarget: 'var',
        umdNamedDefine: 'var',
    },
    module: {
        loaders: [],
        preLoaders: [],
        postLoaders: [],
        noParse: [RegExp],
    },
    plugins: []
}];
