/**
 * Module dependencies
 */

let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let webpack = require('webpack')

/**
 * A basic Webpack config to use with a Sails app.
 *
 * This config is used by the api/hooks/webpack hook which initializes a
 * Webpack compiler in "watch" mode.
 *
 * See https://webpack.js.org/configuration for a full guide to Webpack config.
 *
 */

module.exports.webpack = {

  /***************************************************************************
  *                                                                          *
  * Create one item in the `entry` dictionary for each page in your app.     *
  *                                                                          *
  ***************************************************************************/
  entry: {

    'homepage': './assets/js/homepage.js',
    'layout': './assets/js/layout.js',
  },


  /***************************************************************************
  *                                                                          *
  * Output bundled .js files with a `.bundle.js` extension into              *
  * the `.tmp/public/js` directory                                           *
  *                                                                          *
  ***************************************************************************/
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, '..', '.tmp', 'public')
  },

  /***************************************************************************
  *                                                                          *
  * Set up a couple of rules for processing .css and .less files. These will *
  * be extracted into their own bundles when they're imported in a           *
  * JavaScript file.                                                         *
  *                                                                          *
  ***************************************************************************/
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        query: {
          limit: 8192,
          name: '/img/[hash].[ext]'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      // Extract less files
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ use: 'css-loader' })
      },
      // Extract less files
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({ use: 'css-loader!less-loader' })
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        loader: "file-loader",
        options: {
          // publicPath:'/font/',
          outputPath:'/font/',
          name: '[name].[ext]'
        },
        // query: {
        //   name: '../[name].[ext]'
        // }
      }
    ],
  },

  /***************************************************************************
  *                                                                          *
  * Set up some plugins to help with Sails development using Webpack.        *
  *                                                                          *
  ***************************************************************************/
  plugins: [

    // This plugin extracts CSS that was imported into .js files, and bundles
    // it into separate .css files.  The filename is based on the name of the
    // .js file that the CSS was imported into.
    new ExtractTextPlugin('styles/[name].bundle.css'),

    // This plugin cleans out your .tmp/public folder before lifting.
    new CleanWebpackPlugin(['public'], {
      root: path.resolve(__dirname, '..', '.tmp'),
      verbose: true,
      dry: false
    }),

    // This plugin copies the `images` and `font` folders into
    // the .tmp/public folder.  You can add any other static asset
    // folders to this list and they'll be copied as well.
    new CopyWebpackPlugin([
      {
        from: './assets/images',
        to: path.resolve(__dirname, '..', '.tmp', 'public', 'images')
      },
      // {
      //   from: './assets/font',
      //   to: path.resolve(__dirname, '..', '.tmp', 'public', 'font')
      // }
    ]),

    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery",
      "window.jQuery": "jquery"
    })
  ],

  // externals: {
  //   jquery: 'window.$'
  // }

};
