const WebExtension = require('webpack-target-webextension')
const webpack = require('webpack')
const { join } = require('path')

/** @returns {webpack.Configuration} */
const config = (a, env) => ({
  devtool: env.mode === 'production' ? undefined : 'cheap-source-map',
  resolve: {
    extensions: ['.js'],
  },
  entry: {
    background: join(__dirname, './background.js'),
    content: join(__dirname, './content.js'),
  },
  plugins: [
    new WebExtension({
      background: { serviceWorkerEntry: 'background' },
    }),
  ],
  devServer: {
    hot: 'only',
  },
})
module.exports = config
