import React from 'react';
import { Help } from './help';
import {cleanup, fireEvent, render} from '@testing-library/react';

afterEach(cleanup);

describe('Logo', () => {
  it('should do something cool', () => {
    const { queryByText } = render(<Help />);
    expect(queryByText('need any help')).toBeTruthy();
  });
});
