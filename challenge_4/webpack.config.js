var path = require('path');

module.exports = {
    entry: __dirname + '/client/src/index.jsx',
    module: {
      rules: [
        {
          test: [/\.jsx$/],
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            query: {
              presets: ['react', 'es2015']
            }
          }
        }
      ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/client/dist'
    }
  };