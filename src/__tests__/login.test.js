import React from 'react';
import { shallow , mount } from 'enzyme';
import { expect } from 'chai';
import LoginPage from '../components/login';
import sinon from 'sinon'
describe('<LoginPage/>', () => {

        it('renders col', () => {
        const wrapper = shallow(<LoginPage/>);
            expect(wrapper.find('Col').length).to.equal(1)
        })

        it('renders FormControl', () => {
            const wrapper = shallow(<LoginPage/>);
                expect(wrapper.find('FormControl').length).to.equal(2)
            })

        it('renders FormGroup', () => {
            const wrapper = shallow(<LoginPage/>);
                expect(wrapper.find('FormGroup').length).to.equal(2)
            })

        it('renders Panel', () => {
            const wrapper = shallow(<LoginPage/>);
                expect(wrapper.find('Panel').length).to.equal(1)
            })

        it('renders Button', () => {
            const wrapper = shallow(<LoginPage/>);
                expect(wrapper.find('Button').length).to.equal(1)
            })

        it('change email value', ()=> {
            const wrapper = mount(<LoginPage/>);
            const input = wrapper.find('#email')
            const target = {
                value: "cj@gmail.com"
            }
            input.simulate('change', {target});
            expect(wrapper.state().email).to.equal(target.value);
        })

        it('change password value', ()=> {
            const wrapper = mount(<LoginPage/>);
            const input = wrapper.find('#password')
            const target = {
                value: "cjmash"
            }
            input.simulate('change', {target});
            expect(wrapper.state().password).to.equal(target.value);
        })
        
        it ('calls the handleClick function onclick', ()=>{
            const spy = sinon.spy()
            LoginPage.prototype.handleClick = spy
            const wrapper = shallow(<LoginPage />)
            wrapper.find('Button').simulate('click')
            expect(spy.calledOnce).to.equal(true)

        })

    })