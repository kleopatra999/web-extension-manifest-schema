import path from 'path';
import fs from 'fs';
import ajv from 'ajv';
import { isValidVersionString } from './formats';

export var schema = fs.readFileSync(
  path.join(__dirname, 'manifest-schema.json'), 'utf8');

var validator = ajv({allErrors: true});
validator.addFormat('versionString', isValidVersionString);

export default validator.compile(JSON.parse(schema));
