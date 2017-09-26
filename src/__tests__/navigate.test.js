import React from 'react';
import { shallow, Enzyme, configure } from 'enzyme';
import { expect } from 'chai';
import Navigator from '../components/navigate';
import React15Adapter from 'enzyme-adapter-react-15';

describe('<Navigator/>', ()=> {
    it('renders a Navbar', ()=> {
        const wrapper = shallow(<Navigator/>,configure({adapter: new React15Adapter()}));
        expect(wrapper.find('Nav').length).to.equal(1)
    })
    it ("renders a NavItem", ()=> {
        const wrapper = shallow(<Navigator/>, configure({adapter: new React15Adapter()}));
        expect(wrapper.find('NavItem').length).to.equal(2)
    })
})