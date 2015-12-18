import fs from 'fs';


export const schema = fs.readFileSync('./manifest-schema.json', 'utf8');

export const validManifest = {
  manifest_version: 2,
  name: 'Beastify',
  version: '1.0',
  applications: {
    gecko: {
      id: 'beastify@mozilla.org',
    },
  },
};


