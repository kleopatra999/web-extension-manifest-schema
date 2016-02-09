import path from 'path';
import fs from 'fs';
import ajv from 'ajv';
import { isValidVersionString } from './formats';

export var schema = fs.readFileSync(
  path.join(__dirname, 'manifest-schema.json'), 'utf8');

export var schemaObject = JSON.parse(schema);

var validator = ajv({
  allErrors: true,
  errorDataPath: 'property',
  jsonPointers: true,
  verbose: true,
});
validator.addFormat('versionString', isValidVersionString);

export default validator.compile(schemaObject);
