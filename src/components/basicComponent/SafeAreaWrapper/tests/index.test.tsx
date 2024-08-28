import React from 'react';
import { render, screen } from '@testing-library/react-native';
import SafeAreaWrapper from '..';
import { Text } from 'react-native';
import { createSnapShot } from 'src/testinghelpers/utils';

describe('SafeAreaWrapper', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <SafeAreaWrapper>
        <Text>Test Child</Text>
      </SafeAreaWrapper>
    );

    expect(getByText('Test Child')).toBeTruthy();
    createSnapShot(screen)
  });
});
