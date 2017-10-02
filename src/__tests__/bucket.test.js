import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon'
import Mybuckets from '../components/buckets';
describe('<Mybuckets/>', () => {

        it('renders col', () => {
        const wrapper = shallow(<Mybuckets/>);
            expect(wrapper.find('Col').length).to.equal(2)
        })

        it('renders Modal', () => {
            const wrapper = shallow(<Mybuckets/>);
                expect(wrapper.find('Modal').length).to.equal(4)
            })

            it('renders FormGroup', () => {
                const wrapper = shallow(<Mybuckets/>);
                    expect(wrapper.find('FormGroup').length).to.equal(4)
                })

                it('renders InputGroup', () => {
                    const wrapper = shallow(<Mybuckets/>);
                        expect(wrapper.find('InputGroup').length).to.equal(4)
                    })

                    it('renders Button', () => {
                        const wrapper = shallow(<Mybuckets/>);
                            expect(wrapper.find('Button').length).to.equal(9)
                        })
    })
