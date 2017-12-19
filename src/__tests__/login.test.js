import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
// import { expect } from 'chai';
import sinon from 'sinon';
import LoginPage from '../components/login';

describe('<LoginPage/>', () => {

  it('renders col', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper.find('Col').length).toEqual(1);
  });

  it('renders FormControl', () => {
	  const wrapper = shallow(<LoginPage />);
    expect(wrapper.find('FormControl').length).toEqual(2);
  });

  it('renders FormGroup', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper.find('FormGroup').length).toEqual(2);
  });

  it('renders Panel', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper.find('Panel').length).toEqual(1);
  });

  it('renders Button', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper.find('Button').length).toEqual(1);
  });

  it( 'change email value', () => {
    const wrapper = mount(<LoginPage />);
    const input = wrapper.find('#email');
    const target = {
      value: 'cj@gmail.com',
    };
    input.simulate('change', { target });
    expect(wrapper.state().email).toEqual(target.value);
  });

  it('change password value', () => {
    const wrapper = mount(<LoginPage />);
    const input = wrapper.find('#password')
    const target = {
      value: 'cjmash',
    };
    input.simulate('change', { target });
    expect(wrapper.state().password).toEqual(target.value);
  });
  it('calls the handle handleclick methods', () => {
    sinon.spy(LoginPage.prototype, 'handleClick')
    const wrapper = mount(<LoginPage />)
    wrapper.instance().handleClick({preventDefault: () =>{} })
    expect(LoginPage.prototype.handleClick.called).toEqual(true)
  });
  it('calls the handleClick function onclick', () => {
    const spy = sinon.spy();
    LoginPage.prototype.handleClick = spy;
    const wrapper = shallow(<LoginPage />);
    wrapper.find('Button').simulate('click');
    expect(spy.calledOnce).toEqual(true);
  });
});
