import React from 'react';
import { render, screen } from '@testing-library/react-native';
import MarkdownViewer from '..';
import { createSnapShot } from 'src/testinghelpers/utils';

describe('MarkdownViewer', () => {
  it('renders markdown text correctly', () => {
    const markdownText = '# Hello World';
    const { getByText } = render(<MarkdownViewer markdownText={markdownText} />);

    expect(getByText('Hello World')).toBeTruthy();
    createSnapShot(screen)
  });
});
