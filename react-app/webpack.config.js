var path = require('path'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    entry: './src/tsx/Index.tsx',
    output: {
      filename: './dist/js/bundle.js'
    },

    devtool: 'source-map',

    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader'
            }
          ]
        }
      ]
    }
  }, {
    devtool: 'source-map',
    entry: './src/css/style.scss',
    output: {
      path: path.join(__dirname, './dist/css'),
      filename: 'style.css'
    },
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css-loader!sass-loader')
        }
      ]
    },
    plugins: [new ExtractTextPlugin('style.css')]
  }
];