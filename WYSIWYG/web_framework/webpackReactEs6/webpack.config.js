/**
 * Created by wjf55 on 2016/9/10.
 */
var webpack = require('webpack');

module.exports = {
    entry:{
        //index:'./dev/js/index.js',
        index2:'./dev/js/index2.js',
        index3:'./dev/js/index3.js',
    },
    output:{
        path:'dist/page/js',
        filename:'[name].js'
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['jsx-loader'], exclude: /node_modules/ },
            //{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style!css" }
             ]
    },
     resolve:{
             extensions:['','.js','.json']
         },
     plugins: [
           new webpack.NoErrorsPlugin()
         ]
}