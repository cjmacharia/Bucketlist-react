import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import BucketItems from '../components/items';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import moxios from 'moxios';
import { sinon, spy } from 'sinon';
import axios from 'axios';

const mockitems =
{
  items: [
    {
      bucketlist_id: 2,
      date_created: 'Mon, 02 Oct 2017 08:46:47 GMT',
      date_modified: 'Mon, 02 Oct 2017 08:46:47 GMT',
      id: 9,
      name: 'mash',
    },
  ],

};

describe('<BucketItems/>', () => {
  beforeEach(() => {
    moxios.install();
    global.props = {
      match: {
        params: { bucketlist_id: 2 },
      },
    };
  });
  it('renders page without crashing ', () => {
    const rendered = renderer.create(
      <BucketItems {...props} />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
  it('renders col', () => {
    const wrapper = shallow(<BucketItems {...props} />);
    expect(wrapper.find('Col').length).toEqual(2);
  });
  it('renders Modal', () => {
    const wrapper = shallow(<BucketItems {...props} />);
    expect(wrapper.find('Modal').length).toEqual(3);
  });

  it('renders FormGroup', () => {
    const wrapper = shallow(<BucketItems {...props} />);
    expect(wrapper.find('FormGroup').length).toEqual(3);
  });

  it('renders InputGroup', () => {
    const wrapper = shallow(<BucketItems {...props} />);
    expect(wrapper.find('InputGroup').length).toEqual(3);
  });
  it('renders Button', () => {
    const wrapper = shallow(<BucketItems {...props} />);
    expect(wrapper.find('Button').length).toEqual(7);
  });

  it('opens modal on click', () => {
    const wrapper = mount(<BucketItems {...props} />);
    expect(wrapper.state().deleteItemModal).toEqual(false);
    expect(wrapper.find('a').length).toEqual(3);
    const input = wrapper.find('.btn');
    input.simulate('click');
    expect(wrapper.state().deleteItemModal).toEqual(false);
  });

  describe('My items', () => {
    it('should render buckets', () => {
      const wrapper = mount(<BucketItems {...props} />);
      wrapper.setState(mockitems);
      const bucket = wrapper.find('.item');
      expect(bucket.length).toEqual(1);
    });
  });
});
