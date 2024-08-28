import { renderHook, act } from '@testing-library/react-hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useMarkdownEditor from '../useMarkdownEditor';
import { mockedMarkDownText } from 'src/testinghelpers/mocks';
import { Alert } from 'react-native';

jest.mock('@react-native-async-storage/async-storage', () => ({
    getItem: jest.fn(),
    setItem: jest.fn(),
}));

describe('useMarkdownEditor', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('loads markdown text from AsyncStorage on mount', async () => {
        jest.spyOn(AsyncStorage, 'getItem').mockResolvedValueOnce(mockedMarkDownText);

        const { result, waitForNextUpdate } = renderHook(() => useMarkdownEditor());

        expect(result.current.markdownText).toBe('');
        expect(result.current.loading).toBe(true);

        await waitForNextUpdate();

        expect(result.current.markdownText).toBe(mockedMarkDownText);
        expect(result.current.loading).toBe(false);
    });

    it('handles error when loading markdown text fails and triggers Alert', async () => {
        jest.spyOn(AsyncStorage, 'getItem').mockRejectedValue(new Error('Failed to load'));
        jest.spyOn(Alert, 'alert');

        const { result, waitForNextUpdate } = renderHook(() => useMarkdownEditor());

        await waitForNextUpdate();

        expect(Alert.alert).toHaveBeenCalledWith('Error', 'Failed to load saved markdown text.');
        expect(result.current.markdownText).toBe('');
        expect(result.current.loading).toBe(false);
    });

    it('sets and saves markdown text to AsyncStorage', async () => {
        const { result } = renderHook(() => useMarkdownEditor());

        act(() => {
            result.current.setMarkdownText(mockedMarkDownText);
        });

        act(() => {
            result.current.saveMarkdown(mockedMarkDownText);
        });

        expect(result.current.markdownText).toBe(mockedMarkDownText);
        expect(AsyncStorage.setItem).toHaveBeenCalledWith('markdownText', mockedMarkDownText);
    });

    it('resets markdown text correctly', async() => {
        const { result } = renderHook(() => useMarkdownEditor());

        act(() => {
            result.current.setMarkdownText('Some text');
        });

        act(() => {
            result.current.handleReset();
        });

        expect(result.current.markdownText).toBe('');
    });
});
