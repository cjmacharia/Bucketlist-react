import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Navigator from '../components/navigate';
import Loggedin from '../components/nav-log';

describe('<Navigator/>', () => {

  it('renders a Navbar', () => {
    const wrapper = shallow(<Navigator />);
    expect(wrapper.find('Nav').length).to.equal(1);
  });

  it ('renders a NavItem', () => {
    const wrapper = shallow(<Navigator />);
    expect(wrapper.find('NavItem').length).to.equal(2);
  });

  it ('renders a navbar', () => {
    const wrapper = shallow(<Navigator />);
    expect(wrapper.find('div').length).to.equal(1);
  });
});

describe('<Loggedin/>', () => {
  it('renders a Navbar', ()=> {
    const wrapper = shallow(<Loggedin />);
    expect(wrapper.find('Nav').length).to.equal(1);
  });

  it('renders a NavItem', () => {
    const wrapper = shallow(<Loggedin />);
    expect(wrapper.find('NavItem').length).to.equal(3);
  });

  it('renders a navbar', () => {
    const wrapper = shallow(<Loggedin />);
    expect(wrapper.find('div').length).to.equal(1);
  });
});
