import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import HomePage from '../components/home';

describe('<HomePage/>', () => {

    it('renders Jumbotron', () => {
    const wrapper = shallow(<HomePage/>);
        expect(wrapper.find('Jumbotron').length).to.equal(1)
    })

    it('renders ListGroup', () => {
        const wrapper = shallow(<HomePage/>);
        expect(wrapper.find('ListGroup').length).to.equal(1)
        })

        it('renders ListGroupItems', () => {
            const wrapper = shallow(<HomePage/>);
            expect(wrapper.find('ListGroupItem').length).to.equal(4)
            })
            
    it('renders col', () => {
        const wrapper = shallow(<HomePage/>);
        expect(wrapper.find('Col').length).to.equal(1)
        })
    })