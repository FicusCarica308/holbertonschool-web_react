const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },
  performance: {
      maxAssetSize: 5000000
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    static: ['./public'],
    compress: true,
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
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin()
  ],
};
