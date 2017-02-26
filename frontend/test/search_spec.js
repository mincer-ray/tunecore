import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Search from '../components/search/search';

const jsdom = require('jsdom').jsdom;

global.document = jsdom('');
global.window = document.defaultView;

describe("Search Component", function() {
  it('renders', () => {
    const wrapper = mount(<Search />);
    expect(wrapper.children()).to.have.length(1);
  });

  it('contains form component', () => {
    const wrapper = mount(<Search />);
    expect(wrapper.find('.searchForm')).to.have.length(1);
  });
});
