const fs = require('fs');
const path = require('path');
const paths = require('./paths.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const DIR_PROJECT = "../../";
const DIR_BUNDLE = path.join(__dirname, DIR_PROJECT, paths.bundle);
const REGEX_JS = /\.js$/;

// choose *.scss files
const main = fs.readdirSync(DIR_BUNDLE).filter(fileName => REGEX_JS.test(fileName));
const entry = main.reduce((entriesObject, fileName) => {
    const js = fileName.replace(REGEX_JS, '.js');
    entriesObject[js] = ("./" + path.join(paths.bundle, fileName));
    return entriesObject;
}, {});

module.exports = {
    entry: entry,
    loaders: [
        {
            test: /\.js$/,
            loader: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015'],
                }
            }
        }
    ],
    plugins: [
        // new UglifyJsPlugin()
    ],
}