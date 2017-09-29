import React from 'react';
import { shallow, configure , mount} from 'enzyme';
import { expect } from 'chai';
import BucketItems from '../components/items';
import toJson from 'enzyme-to-json'
describe('<BucketItems/>', () => {
         beforeEach(()=> {
            global.props = {
                match:{
                    params: {bucketlist_id:2}

                }
            }
         })
        it('renders col', () => {
        const wrapper = shallow(<BucketItems {...props}/>);
            expect(wrapper.find('Col').length).to.equal(2)
        })
        it('renders Modal', () => {
            const wrapper = shallow(<BucketItems {...props}/>);
                expect(wrapper.find('Modal').length).to.equal(2)
            })

        it('renders FormGroup', () => {
            const wrapper = shallow(<BucketItems {...props}/>);
                expect(wrapper.find('FormGroup').length).to.equal(2)
        })

        it('renders InputGroup', () => {
            const wrapper = shallow(<BucketItems {...props}/>);
            expect(wrapper.find('InputGroup').length).to.equal(2)
        })
        it('renders Button', () => {
            const wrapper = shallow(<BucketItems {...props}/>);
            expect(wrapper.find('Button').length).to.equal(5)
        })
       
})