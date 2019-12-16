// production config
const merge = require('webpack-merge');
const { resolve } = require('path');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './index.tsx',
  output: {
    filename: 'js/bundle.min.js',
    path: resolve(__dirname, '../../dist'),
    //publicPath: '/',
    publicPath: 'https://honeywellprod.sharepoint.com/teams/BotDashBoard/spfx/BotsPortal/BP7/',
  },
  devtool: 'source-map',
  plugins: [],
});
