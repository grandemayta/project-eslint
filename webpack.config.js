const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = path.resolve(__dirname, './src');
const dist = path.resolve(__dirname, './dist');

module.exports = {
  entry: `${src}/index.js`,
  output: {
    path: dist,
    filename: 'bundle.app.js'
  },
  devServer: {
    port: 3002,
    open: true
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.template.ejs',
      filename: 'index.html'
    })
  ],
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules', 'src']
  }
};
