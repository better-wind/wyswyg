/**
 * Created by wjf55 on 2016/9/10.
 */
var webpack = require('webpack');

module.exports = {
    entry:{
        demo1:'./demo1/js/demo1.js'
    },
    output:{
        path:'dist/js/page',
        filename:'[name].js'
    },

}