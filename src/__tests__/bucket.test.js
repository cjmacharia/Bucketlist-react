import React from 'react';
import { shallow } from 'enzyme';
import Mybuckets from '../components/buckets';
import renderer from 'react-test-renderer';

describe('<Mybuckets/>', () => {

    it('renders page without crashing ', () => {
        const rendered = renderer.create(
          <Mybuckets />,
          );
        expect(rendered.toJSON()).toMatchSnapshot();
      })
  it('renders col', () => {
    const wrapper = shallow(<Mybuckets />);
    expect(wrapper.find('Col').length).toEqual(2);
  });

  it('renders Modal', () => {
    const wrapper = shallow(<Mybuckets />);
    expect(wrapper.find('Modal').length).toEqual(4);
  });

  it('renders FormGroup', () => {
    const wrapper = shallow(<Mybuckets />);
    expect(wrapper.find('FormGroup').length).toEqual(4);
  });

  it('renders InputGroup', () => {
    const wrapper = shallow(<Mybuckets />);
    expect(wrapper.find('InputGroup').length).toEqual(4);
  });

  it('renders Button', () => {
    const wrapper = shallow(<Mybuckets />);
    expect(wrapper.find('Button').length).toEqual(9);
  });
});
