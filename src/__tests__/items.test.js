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

        const mockbuckets =
        {
            'items':[
                {
                  "bucketlist_id": 19,
                  "date_created": "Mon, 02 Oct 2017 08:46:47 GMT",
                  "date_modified": "Mon, 02 Oct 2017 08:46:47 GMT",
                  "id": 9,
                  "name": "mash"
                }
              ]

          }
    describe ('Mybuckets', ()=>
    {

        it ('should render buckets', ()=> {
        const wrapper = mount(<BucketItems  {...props}/>);
        wrapper.setState(mockbuckets)
        const bucket = wrapper.find('.item')
        expect(bucket.length).to.equal(1);
    })
    })
})