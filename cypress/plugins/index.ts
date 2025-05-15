const webpack = require('@cypress/webpack-preprocessor');
const path = require('path');

module.exports = (on: any) => {
  const options = {
    webpackOptions: {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../../../src'),
        },
        extensions: ['.ts', '.js'],
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: [{ loader: 'ts-loader' }],
          },
        ],
      },
    },
  };

  on('file:preprocessor', webpack(options));
};
