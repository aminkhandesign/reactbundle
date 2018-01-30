var webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path:'dist',
        filename: 'bundle.js',
       path: path.resolve(__dirname,'dist')
    },
    devServer: {
        inline:true,
        contentBase:'./dist',
        port:3000
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['latest','stage-0','react']
                }
            }
        ]
    }
}