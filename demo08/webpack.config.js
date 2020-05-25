
var htmlPlugin = require('html-webpack-plugin');
var openBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  plugins: [
    new htmlPlugin({
      title: '3rd-party plugins',
      filename: 'index.html'
    }),
    new openBrowserPlugin({
      url: 'http://localhost:8080'
    })
  ]
}