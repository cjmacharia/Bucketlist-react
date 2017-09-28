import React from 'react';
import { shallow, Enzyme, configure } from 'enzyme';
import { expect } from 'chai';
import Navigator from '../components/navigate';

describe('<Navigator/>', ()=> {
    it('renders a Navbar', ()=> {
        const wrapper = shallow(<Navigator/>);
        expect(wrapper.find('Nav').length).to.equal(1)
    })
    it ("renders a NavItem", ()=> {
        const wrapper = shallow(<Navigator/>);
        expect(wrapper.find('NavItem').length).to.equal(2)
    })
    it ("renders a navbar", ()=> {
        const wrapper = shallow(<Navigator/>);
        expect(wrapper.find('div').length).to.equal(1)
    })
})