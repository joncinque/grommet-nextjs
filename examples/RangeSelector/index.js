/* eslint-disable import/extensions,import/no-unresolved */
import { doc } from 'grommet/components/RangeSelector/doc.js';
import { packages, categories } from '../lookups.js';
import { _starter } from './_starter.js';


export const RangeSelector = {
  name: 'RangeSelector',
  category: categories.input,
  package: packages.grommet,
  doc: doc({}).toJSON(),
  themeDoc: doc.themeDoc,
  examples: {
    _starter,
  },
};

