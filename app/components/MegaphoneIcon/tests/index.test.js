import MegaphoneIcon from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<MegaphoneIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(
      <MegaphoneIcon />
    );
    expect(renderedComponent.find('svg').length).toEqual(1);
  });
});