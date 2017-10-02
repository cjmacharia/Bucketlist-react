import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon'
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

        it('renders modal', () => {
            const wrapper = shallow(<Changepassword/>);
                expect(wrapper.find('Modal').length).to.equal(1)
        })

        it('change password value', ()=> {
            const wrapper = mount(<Changepassword/>);
            const input = wrapper.find('#password')
            const target = {
                value: "cjmash"
            }
            input.simulate('change', {target});
            expect(wrapper.state().password).to.equal(target.value);
        })

        it('change confirm password value', ()=> {
            const wrapper = mount(<Changepassword/>);
            const input = wrapper.find('#cpassword')
            const target = {
                value: "cjmash"
            }
            input.simulate('change', {target});
            expect(wrapper.state().cpassword).to.equal(target.value);
        })

        it('change confirm email value', ()=> {
            const wrapper = mount(<Changepassword/>);
            const input = wrapper.find('#email')
            const target = {
                value: "cjmash@gmail.com"
            }
            input.simulate('change', {target});
            expect(wrapper.state().email).to.equal(target.value);
        })
        it('submits onclick works', () =>{
            const spy = sinon.spy()
            Changepassword.prototype.handleClick = spy
            const wrapper = shallow(<Changepassword/>)
            wrapper.find('.button').simulate('click')
            expect(spy.calledOnce).to.equal(true)
        })
    })