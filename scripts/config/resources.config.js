module.exports = {
    entry: {},
    loaders: [
        {
            test: /\.(woff|woff2|eot|ttf)$/,
            loader: 'file-loader?limit=100000',
            options:{name:'fonts/[name].[hash].[ext]'}
        },
        {
            test: /\.(png|jpg|jpeg|bmp|svg)$/,
            loader: 'file-loader?limit="100000',
            options:{name:'images/[name].[hash].[ext]'}
        }
    ],
    plugins:[]
}