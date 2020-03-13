/* eslint-disable import/extensions,import/no-unresolved */
import { doc } from 'grommet/components/Distribution/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';


export const Distribution = {
  name: 'Distribution',
  category: categories.visualization,
  package: packages.grommet,
  doc: doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
  },
};

