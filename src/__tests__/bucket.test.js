import React from 'react';
import { shallow, mount } from 'enzyme';
import Mybuckets from '../components/buckets';
import sinon from 'sinon';
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

  it('calls the handle add items methods', () => {
    sinon.spy(Mybuckets.prototype, 'handleAddBuckets')
    const wrapper = mount(<Mybuckets />)
    wrapper.instance().handleAddBuckets({preventDefault: () =>{} })
    expect(Mybuckets.prototype.handleAddBuckets.called).toEqual(true)

  });
  it('calls the handle add bucketlist methods', () => {
    sinon.spy(Mybuckets.prototype, 'handleSearch')
    const wrapper = mount(<Mybuckets />)
    wrapper.instance().handleSearch({preventDefault: () =>{} })
    expect(Mybuckets.prototype.handleSearch.called).toEqual(true)
  });
  it('calls the handle update Buckets methods', () => {
    sinon.spy(Mybuckets.prototype, 'updateBucket')
    const wrapper = mount(<Mybuckets />)
    wrapper.instance().updateBucket({preventDefault: () =>{} })
    expect(Mybuckets.prototype.updateBucket.called).toEqual(true)
  });
  it('calls the handle add items to a bucketlist methods', () => {
    sinon.spy(Mybuckets.prototype, 'handleAdditems')
    const wrapper = mount(<Mybuckets />)
    wrapper.instance().handleAdditems({preventDefault: () =>{} })
    expect(Mybuckets.prototype.handleAdditems.called).toEqual(true)
  });
  it('calls the handle delete bucketlists methods', () => {
    sinon.spy(Mybuckets.prototype, 'deleteHandler')
    const wrapper = mount(<Mybuckets />)
    wrapper.instance().deleteHandler({preventDefault: () =>{} })
    expect(Mybuckets.prototype.deleteHandler.called).toEqual(true)
  });
  it('calls the handle getNextPage bucketlists methods', () => {
    sinon.spy(Mybuckets.prototype, 'getNextPage')
    const wrapper = mount(<Mybuckets />)
    wrapper.instance().getNextPage({preventDefault: () =>{} })
    expect(Mybuckets.prototype.getNextPage.called).toEqual(true)
  });
  it('calls the handle checkBuckets methods', () => {
    sinon.spy(Mybuckets.prototype, 'checkBuckets')
    const wrapper = mount(<Mybuckets />)
    wrapper.instance().checkBuckets({preventDefault: () =>{} })
    expect(Mybuckets.prototype.checkBuckets.called).toEqual(true)
  });
  it('calls the handle getprevPage methods', () => {
    sinon.spy(Mybuckets.prototype, 'getprevPage')
    const wrapper = mount(<Mybuckets />)
    wrapper.instance().getprevPage({preventDefault: () =>{} })
    expect(Mybuckets.prototype.getprevPage.called).toEqual(true)
  });
  it('calls the handle getBuckets methods', () => {
    sinon.spy(Mybuckets.prototype, 'getBuckets')
    const wrapper = mount(<Mybuckets />)
    wrapper.instance().getBuckets({preventDefault: () =>{} })
    expect(Mybuckets.prototype.getBuckets.called).toEqual(true)
  });
  it('calls the handle componentDidMount methods', () => {
    sinon.spy(Mybuckets.prototype, 'componentDidMount')
    const wrapper = mount(<Mybuckets />)
    wrapper.instance().componentDidMount({preventDefault: () =>{} })
    expect(Mybuckets.prototype.componentDidMount.called).toEqual(true)
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
