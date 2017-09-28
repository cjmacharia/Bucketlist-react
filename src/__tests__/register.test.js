import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
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

    })