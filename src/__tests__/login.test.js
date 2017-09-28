import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import LoginPage from '../components/login';
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

    })