/**
 * Created by wjf55 on 2016/9/10.
 */
var webpack = require('webpack');

module.exports = {
    entry:{
        index:'./dev/js/index.js',

    },
    output:{
        path:'build/',
        filename:'[name].js'
    },
    module: {
        loaders: [
            //{ test: /\.js?$/, loaders: ['jsx-loader'], exclude: /node_modules/ },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            }
             ]
    },
     resolve:{
             extensions:['','.js','.json']
         },
     plugins: [
           new webpack.NoErrorsPlugin()
         ]
}