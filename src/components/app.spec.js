import React from 'react';
import expect from 'expect';
import { shallow, configure } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16'
import SearchBar from '../containers/search_bar';

configure({ adapter: new Adapter() });

const wrapper = shallow(<App />)

describe('App Component', () => {
  it('should render a SearchBar component', () => {
    expect(wrapper.find(SearchBar).length).toEqual(1)
  })
})