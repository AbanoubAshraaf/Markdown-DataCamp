import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import TextArea from '..';
import { createSnapShot } from 'src/testinghelpers/utils';

describe('TextArea', () => {
  it('renders correctly and calls onChangeText when text is changed', () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = render(
      <TextArea
        value=""
        onChangeText={onChangeTextMock}
        placeholder="Enter your markdown here..."
      />
    );

    const input = getByPlaceholderText('Enter your markdown here...');
    fireEvent.changeText(input, 'New text');

    expect(onChangeTextMock).toHaveBeenCalledWith('New text');
    createSnapShot(screen)
  });
});
