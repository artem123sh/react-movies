import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

test('App should have Testing body', () => {
  const app = Enzyme.shallow(<App />);
  expect(app.text()).toEqual('Testing');
});
