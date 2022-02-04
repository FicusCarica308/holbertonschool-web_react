const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
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
  devServer: {
    static: ['./public'],
    port: 8564,
  },
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: ["style-loader", "css-loader"] 
      },
      {
        test: /\.()$/i,
        use: ["file-loader",
          {
            loader: "image-webpack-loader",
          }
        ]
      }
    ]
  },
};
