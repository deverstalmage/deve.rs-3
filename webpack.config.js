const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
    entry: './client/main.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/assets/',
        filename: 'bundle.js',
        sourceMapFilename: '[file].map'
    },
    module: {
        loaders: [
          { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['es2015', 'react'] } },
          { test: /\.css$/, loaders: ['style', 'css'] },
          { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] },
          { test: /\.(png|jpg)$/, loader: 'url?limit=8192' }
        ]
    },
    postcss: function() {
      return [autoprefixer({
        browsers: ['last 3 versions']
      })];
    },
    resolve: {
      extensions: ['', '.js', '.json']
    }
};