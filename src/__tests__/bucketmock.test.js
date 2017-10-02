import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import Mybuckets from '../components/buckets';

const mockbuckets =
    {
        "bucketlists": [
          {
            "created_by": 1,
            "date_created": "Mon, 02 Oct 2017 06:59:49 GMT",
            "date_modified": "Mon, 02 Oct 2017 06:59:49 GMT",
            "id": 19,
            "name": "cjmash "
          }
        ],
        "next_page": "",
        "previous_page": ""
      }
describe ('Mybuckets', ()=>
{

    it ('should render buckets', ()=> {
    const wrapper = mount(<Mybuckets/>);
    wrapper.setState(mockbuckets)
    const bucket = wrapper.find('.buckets')
    expect(bucket.length).to.equal(1);
})
})