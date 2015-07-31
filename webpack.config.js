/**
 * Created by Max on 7/28/2015.
 */
var path = require('path');

module.exports = {
    context: path.join(__dirname, '/app'),
    entry: './index.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            {test: /\.html$/, loader: 'raw', exclude: /node_modules/},
            {test: /\.css$/, loader: 'style!css', exclude: /node_modules/}
        ]
    }
};