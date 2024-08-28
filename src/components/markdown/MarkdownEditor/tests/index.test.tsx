import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import MarkdownEditor from '..';
import useMarkdownEditor from 'src/hooks/useMarkdownEditor';
import useIsPortrait from 'src/hooks/useIsPortrait';
import { mocked } from 'jest-mock';
import { mockedMarkDownText } from 'src/testinghelpers/mocks';
import { createSnapShot } from 'src/testinghelpers/utils';

jest.mock('src/hooks/useMarkdownEditor');
jest.mock('src/hooks/useIsPortrait');
jest.mock('@react-native-async-storage/async-storage', () => ({
    getItem: jest.fn(),
    setItem: jest.fn(),
}));

describe('MarkdownEditor', () => {
    afterEach(() => {
        jest.clearAllMocks();
        jest.clearAllTimers();
        jest.useRealTimers();
    });

    it('renders correctly, handles text change, and reset', async () => {
        const setMarkdownTextMock = jest.fn();
        const saveMarkdownMock = jest.fn();
        const handleResetMock = jest.fn();

        mocked(useMarkdownEditor).mockReturnValue({
            markdownText: '',
            setMarkdownText: setMarkdownTextMock,
            saveMarkdown: saveMarkdownMock,
            loading: false,
            handleReset: handleResetMock,
        });

        mocked(useIsPortrait).mockReturnValue(true);

        jest.useFakeTimers(); // Use fake timers

        const { getByPlaceholderText, getByText } = render(<MarkdownEditor />);

        const textArea = getByPlaceholderText('Enter your markdown here...');
        const resetButton = getByText('Reset');

        createSnapShot(screen);

        fireEvent.changeText(textArea, mockedMarkDownText);

        // Fast forward time for debounce
        jest.advanceTimersByTime(2000);
        expect(setMarkdownTextMock).toHaveBeenCalledWith(mockedMarkDownText);
        expect(saveMarkdownMock).toHaveBeenCalledWith(mockedMarkDownText);

        fireEvent.press(resetButton);
        expect(handleResetMock).toHaveBeenCalled();

        jest.useRealTimers(); // Switch back to real timers
    });

    it('shows loading indicator when loading is true', () => {
        mocked(useMarkdownEditor).mockReturnValue({
            markdownText: '',
            setMarkdownText: jest.fn(),
            saveMarkdown: jest.fn(),
            loading: true,
            handleReset: jest.fn(),
        });

        mocked(useIsPortrait).mockReturnValue(true);

        const { getByTestId } = render(<MarkdownEditor />);
        expect(getByTestId('loading-indicator')).toBeTruthy();

        // Snapshot the loading state
        createSnapShot(screen);
    });
});
