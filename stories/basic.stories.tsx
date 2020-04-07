import * as React from 'react';
import { Highlight } from '../src';

export default {
  title: 'Demo',
};

export function Basic() {
  return (
    <Highlight match={/a|t/} text="An apple a day keeps the doctor away." />
  );
}
