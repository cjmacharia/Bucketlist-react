import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
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
  // it('calls the handle handleLogout methods', () => {
  //   sinon.spy(Loggedin.prototype, 'handleLogout');
  //   const wrapper = mount(<Loggedin />);
  //   wrapper.instance().handleLogout({ preventDefault: () => {} });
  //   expect(Loggedin.prototype.handleLogout.called).toEqual(true);
  // });
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
