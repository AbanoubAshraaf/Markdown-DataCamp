import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import CustomButton from '..';
import { createSnapShot } from 'src/testinghelpers/utils';

describe('ResetButton', () => {
  it('renders correctly and calls onPress when clicked', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<CustomButton title='Reset' onPress={onPressMock} />);

    const button = getByText('Reset');
    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalled();
    createSnapShot(screen)

  });
});
