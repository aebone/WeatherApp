import React from 'react';
import expect from 'expect';
import { shallow, configure } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

const wrapper = shallow(<App />)

describe('App Component', () => {
  it('should render a starter text', () => {
    expect(wrapper.find('div').text()).toEqual('React simple starter')
  })
})