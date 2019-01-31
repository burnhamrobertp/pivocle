import React from 'react';
import ReactDOM from 'react-dom';
import Pivocle from './Pivocle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pivocle />, div);
  ReactDOM.unmountComponentAtNode(div);
});
