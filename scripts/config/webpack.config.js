const path = require('path');
const paths = require('./paths.config');
const pages = require('./pages.config');
const scss = require('./scss.config');
const bundle = require('./bundle.config');
const resources = require('./resources.config');

const webpack = require("webpack");
const BowerWebpackPlugin = require("bower-webpack-plugin");

module.exports = {
    output: {
        filename: '[name]',
        path: path.join(__dirname, "../../", paths.dist)
    },
    resources: resources,
    pages: pages,
    scss: scss,
    bundle: bundle
    
};