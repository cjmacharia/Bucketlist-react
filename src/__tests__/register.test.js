import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import RegisterPage from '../components/register';
import renderer from 'react-test-renderer';

describe('<RegisterPage/>', () => {
  
  it('renders col', () => {
    const wrapper = shallow(<RegisterPage />);
    expect(wrapper.find('Col').length).toEqual(1);
});

  it('renders FormControl', () => {
    const wrapper = shallow(<RegisterPage />);
    expect(wrapper.find('FormControl').length).toEqual(4);
  });

  it('renders FormGroup', () => {
    const wrapper = shallow(<RegisterPage />);
    expect(wrapper.find('FormGroup').length).toEqual(4);
  });

  it('renders Panel', () => {
    const wrapper = shallow(<RegisterPage />);
    expect(wrapper.find('Panel').length).toEqual(1);
  });

  it('renders Button', () => {
    const wrapper = shallow(<RegisterPage />);
    expect(wrapper.find('Button').length).toEqual(1);
  });

  it('change password value', () => {
    const wrapper = mount(<RegisterPage />);
    const input = wrapper.find('#password');
    const target = {
      value: 'cjmash',
    };
    input.simulate('change', { target });
    expect(wrapper.state().password).toEqual(target.value);
  });

  it('change username value', () => {
    const wrapper = mount(<RegisterPage />);
    const input = wrapper.find('#username');
    const target = {
      value: 'cjmash',
    }
    input.simulate('change', { target });
    expect(wrapper.state().username).toEqual(target.value);
  });

  it('change confirm password value', () => {
    const wrapper = mount(<RegisterPage />);
    const input = wrapper.find('#cpassword');
    const target = {
      value: 'cjmash',
    };
    input.simulate('change', { target });
    expect(wrapper.state().cpassword).toEqual(target.value);
  });

  it('change email value', () => {
    const wrapper = mount(<RegisterPage />);
    const input = wrapper.find('#email');
    const target = {
      value: 'cjmash@gmail.com',
    };
    input.simulate('change', { target });
    expect(wrapper.state().email).toEqual(target.value);
  });

  it('calls the handle handleclick methods', () => {
    sinon.spy(RegisterPage.prototype, 'handleClick')
    const wrapper = mount(<RegisterPage />)
    wrapper.instance().handleClick({preventDefault: () =>{} })
    expect(RegisterPage.prototype.handleClick.called).toEqual(true)
  });
  it('calls the handleClick function onclick', () => {
    const spy = sinon.spy();
    RegisterPage.prototype.handleClick = spy;
    const wrapper = shallow(<RegisterPage />);
    wrapper.find('Button').simulate('click');
    expect(spy.calledOnce).toEqual(true);
  });
});
