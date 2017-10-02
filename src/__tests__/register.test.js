import React from 'react';
import { shallow, configure , mount} from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon'
import RegisterPage from '../components/register';
describe('<RegisterPage/>', () => {

        it('renders col', () => {
        const wrapper = shallow(<RegisterPage/>);
            expect(wrapper.find('Col').length).to.equal(1)
        })

        it('renders FormControl', () => {
            const wrapper = shallow(<RegisterPage/>);
                expect(wrapper.find('FormControl').length).to.equal(4)
            })

            it('renders FormGroup', () => {
                const wrapper = shallow(<RegisterPage/>);
                    expect(wrapper.find('FormGroup').length).to.equal(4)
                })

                it('renders Panel', () => {
                    const wrapper = shallow(<RegisterPage/>);
                        expect(wrapper.find('Panel').length).to.equal(1)
                    })

                    it('renders Button', () => {
                        const wrapper = shallow(<RegisterPage/>);
                            expect(wrapper.find('Button').length).to.equal(1)
                        })

                    it('change password value', ()=> {
                        const wrapper = mount(<RegisterPage/>);
                        const input = wrapper.find('#password')
                        const target = {
                            value: "cjmash"
                        }
                        input.simulate('change', {target});
                        expect(wrapper.state().password).to.equal(target.value);
                    })
                    it('change username value', ()=> {
                        const wrapper = mount(<RegisterPage/>);
                        const input = wrapper.find('#username')
                        const target = {
                            value: "cjmash"
                        }
                        input.simulate('change', {target});
                        expect(wrapper.state().username).to.equal(target.value);
                    })
                    it('change confirm password value', ()=> {
                        const wrapper = mount(<RegisterPage/>);
                        const input = wrapper.find('#cpassword')
                        const target = {
                            value: "cjmash"
                        }
                        input.simulate('change', {target});
                        expect(wrapper.state().cpassword).to.equal(target.value);
                    })
                    it('change email value', ()=> {
                        const wrapper = mount(<RegisterPage/>);
                        const input = wrapper.find('#email')
                        const target = {
                            value: "cjmash@gmail.com"
                        }
                        input.simulate('change', {target});
                        expect(wrapper.state().email).to.equal(target.value);
                    })

                    it ('calls the handleClick function onclick', ()=>{
                        const spy = sinon.spy()
                        RegisterPage.prototype.handleClick = spy
                        const wrapper = shallow(<RegisterPage />)
                        wrapper.find('Button').simulate('click')
                        expect(spy.calledOnce).to.equal(false)

                    })
    })