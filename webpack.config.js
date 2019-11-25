const dotenv = require('dotenv').config();
const path = require('path');

module.exports = {
  mode: process.env.MODE,
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx', '.json'],
  },
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 9000,
  },
};
