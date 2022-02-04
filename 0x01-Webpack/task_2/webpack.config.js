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
        test: /\.css$/, 
        use: ["style-loader", "css-loader", "file-loader"] 
      },
      { 
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ]
  },
};