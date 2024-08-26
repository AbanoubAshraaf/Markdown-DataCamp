import React from 'react';
import { render, screen } from '@testing-library/react-native';
import LoadingIndicator from '..';
import { createSnapShot } from 'src/testinghelpers/utils';

describe('LoadingIndicator', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<LoadingIndicator />);
    expect(getByTestId('loading-indicator')).toBeTruthy();
    createSnapShot(screen)
  });
});
