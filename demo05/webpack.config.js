module.exports = {
  entry: './main.js',
  output: {
    path: __dirname + '/dist/js',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.png|jpeg$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 4770
          }
        }
      }
    ]
  }
}