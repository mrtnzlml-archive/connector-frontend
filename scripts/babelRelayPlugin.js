const fetch = require('node-fetch');
const fs = require('fs');
const {
	buildClientSchema,
	introspectionQuery,
	printSchema,
} = require('graphql/utilities');
const path = require('path');
const schemaPath = path.join(__dirname, '../data/schema');

const SERVER = 'http://adeira.loc/graphql'; //FIXME: already in index.js (?), also it doesn't work with self-signed HTTPS certificate

// Save JSON of full schema introspection for Babel Relay Plugin to use
fetch(`${SERVER}`, {
	method: 'POST',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		'query': introspectionQuery
	}),
}).then(res => res.json()).then(schemaJSON => {
	fs.writeFileSync(
		`${schemaPath}.json`,
		JSON.stringify(schemaJSON, null, 2)
	);

	// Save user readable type system shorthand of schema
	const graphQLSchema = buildClientSchema(schemaJSON.data);
	fs.writeFileSync(
		`${schemaPath}.graphqls`,
		printSchema(graphQLSchema)
	);
});



const babelRelayPlugin = require('babel-relay-plugin');
const schema = require(`${schemaPath}.json`);
module.exports = babelRelayPlugin(schema.data);
