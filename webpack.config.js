var webpack = require('webpack');

module.exports = {
  entry: './app/main.js',
  output: {
    path: __dirname,
    filename: './app/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
