import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Changepassword from '../components/changepassword';
describe('<Changepassword/>', () => {

        it('renders col', () => {
        const wrapper = shallow(<Changepassword/>);
            expect(wrapper.find('Col').length).to.equal(1)
        })

        it('renders FormControl', () => {
            const wrapper = shallow(<Changepassword/>);
                expect(wrapper.find('FormControl').length).to.equal(3)
            })

        it('renders FormGroup', () => {
            const wrapper = shallow(<Changepassword/>);
                expect(wrapper.find('FormGroup').length).to.equal(4)
            })

        it('renders Panel', () => {
            const wrapper = shallow(<Changepassword/>);
                expect(wrapper.find('Panel').length).to.equal(1)
        })

        it('renders Button', () => {
            const wrapper = shallow(<Changepassword/>);
                expect(wrapper.find('Button').length).to.equal(3)
        })

    })