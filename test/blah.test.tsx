import React from 'react';
import * as ReactDOM from 'react-dom';
import { Basic } from '../stories/basic.stories';

describe('Basic', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Basic />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
