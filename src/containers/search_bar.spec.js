import React from 'react';
import expect from 'expect';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import SearchBar from '../containers/search_bar';

configure({ adapter: new Adapter() });

const wrapper = shallow(<SearchBar />)

describe('SearchBar Component', () => {
  it('should render a input element', () => {
    expect(wrapper.find('input').exists())
  })

  it('should render a search button', () => {
    expect(wrapper.find('button').text()).toBe('Search');
  })

  it('should update state as user types', () => {
    // TODO
   // wrapper.setState({term: "dmflkd"});
    //console.log(wrapper.state.term + " efmnosdhfiodjsfiojsoi")
   // SearchBar.setState({term: "dmflkd"});
   // console.log(SearchBar.state + " efmnosdhfiodjsfiojsoi")
    // expect(wrapper.find('input').text='abc').toEqual(SearchBar.state);
  })

  it('should prevent reloading page when clicking submit', () => {
  })



})