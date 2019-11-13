// Pull in files other than JavaScript
var ExtractText = require('extract-text-webpack-plugin');

// Define debug mode
var debug = process.env.NODE_ENV !== 'production';

// Define webpack
var webpack = require('webpack');

// Define Editor stylesheet
var extractEditorSCSS = new ExtractText({
  filename: './blocks.editor.build.css'
});

// Define Front-end stylesheet
var extractBlockSCSS = new ExtractText({
  filename: './blocks.style.build.css'
});

var plugins = [ extractEditorSCSS, extractBlockSCSS ];

var scssConfig = {
  use: [
    {
      loader: 'css-loader'
    },
    {
      loader: 'sass-loader',
      options: {
        outputStyle: 'compressed'
      }
    }
  ]
};

module.exports = {
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : null,
  mode: debug ? 'development' : 'production',
  entry: './blocks/src/blocks.js',
  output: {
    path: __dirname + '/blocks/dist/',
    filename: 'blocks.build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /editor\.scss$/,
        exclude: /node_modules/,
        use: extractEditorSCSS.extract(scssConfig)
      },
      {
        test: /style\.scss$/,
        exclude: /node_modules/,
        use: extractBlockSCSS.extract(scssConfig)
      }
    ]
  },
  plugins: plugins
};
