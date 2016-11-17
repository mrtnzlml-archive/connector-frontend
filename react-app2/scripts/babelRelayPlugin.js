const babelRelayPlugin = require('babel-relay-plugin');
const schema = require('../data/schema.json');

module.exports = babelRelayPlugin(schema.data);
