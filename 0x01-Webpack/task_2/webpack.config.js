const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, './js/dashboard_main.js'),
  },
  performance: {
      maxAssetSize: 5000000
  },  

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
          test: /\.s*css$/,
          use: [
              "style-loader", // creates style nodes from JS strings
              "css-loader", // translates CSS into CommonJS
          ]
      },
      {
          test: /\.(jpg|png)$/,
          loader: 'file-loader'
      },
      ]
  },
};