const path = require('path');

module.exports = {
  devtool: 'source-map',
  watch: true,
  entry: {
    filename: './src/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
