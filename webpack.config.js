const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
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
      extensions: [".ts", ".js"]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist'
  },
  performance: {
    maxEntrypointSize: 2048576,
    maxAssetSize: 2048576
  }
};