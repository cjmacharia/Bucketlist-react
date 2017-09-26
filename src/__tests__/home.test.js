import React from 'react';
import { shallow, Enzyme, configure } from 'enzyme';
import { expect } from 'chai';
import HomePage from '../components/home';
import React15Adapter from 'enzyme-adapter-react-15';

describe('<HomePage/>', () => {

    it('renders Jumbotron', () => {
        const wrapper = shallow(<HomePage/>, configure({adapter: new React15Adapter()}));
        expect(wrapper.find('Jumbotron').length).to.equal(1)
    })

    it('renders ListGroup', () => {
        const wrapper = shallow(<HomePage/>, configure({adapter: new React15Adapter()}));
        expect(wrapper.find('ListGroup').length).to.equal(1)
        })

        it('renders ListGroupItems', () => {
            const wrapper = shallow(<HomePage/>, configure({adapter: new React15Adapter()}));
            expect(wrapper.find('ListGroupItem').length).to.equal(4)
            })
    it('renders col', () => {
        const wrapper = shallow(<HomePage/>, configure({adapter: new React15Adapter()}));
        expect(wrapper.find('Col').length).to.equal(1)
        })
    })