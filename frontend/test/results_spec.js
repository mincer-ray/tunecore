import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Results from '../components/results/results';

const jsdom = require('jsdom').jsdom;

global.document = jsdom('');
global.window = document.defaultView;

describe("Result Component", function() {
  it('renders', () => {
    const wrapper = mount(<Results results={{}} />);
    expect(wrapper.children()).to.have.length(1);
  });

  it('displays no results when empty', () => {
    const wrapper = shallow(<Results results={{}} />);
    expect(wrapper.contains(<p>No Results</p>)).to.equal(true);
  });

  it('displays results when passed props', () => {
    const results = { 1: { song: 'song', artist: 'artist', album: "album" }};
    const wrapper = mount(<Results results={results} />);
    expect(wrapper.find('.songKey')).to.have.length(1);
  });

  it('displays many results', () => {
    const results = {
      1: { song: 'song', artist: 'artist', album: "album" },
      2: { song: 'song', artist: 'artist', album: "album" },
      3: { song: 'song', artist: 'artist', album: "album" }
    };
    const wrapper = mount(<Results results={results} />);
    expect(wrapper.find('.songKey')).to.have.length(3);
  });
});
