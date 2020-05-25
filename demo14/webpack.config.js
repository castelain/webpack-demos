module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
    ]
  },
  externals: {
    // require('data') : data -> 要排除的模块； { data1 }：用于替换的全局变量 window.data1
    // 'data': 'data1',
    'react': 'React',
    'react-dom': 'ReactDOM',
    '@element-ui/core': 'ElememtUI',
    // 'data2': 'data2'
  }
};
