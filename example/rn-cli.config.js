/* eslint-disable import/no-commonjs */

const path = require('path');
const glob = require('glob-to-regexp');
const blacklist = require('metro/src/blacklist');

module.exports = {
  getProjectRoots() {
    return [__dirname, path.resolve(__dirname, '..')];
  },
  getProvidesModuleNodeModules() {
    return ['react-native', 'react'];
  },
  getBlacklistRE() {
    return blacklist([glob(`${path.resolve(__dirname, '..')}/node_modules/*`)]);
  },
};