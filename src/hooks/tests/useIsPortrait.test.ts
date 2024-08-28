import { renderHook, act } from '@testing-library/react-hooks';
import { useWindowDimensions } from 'react-native';
import { mocked } from 'jest-mock';
import { mockedLandScapeDimensions, mockedPortraitDimensions } from 'src/testinghelpers/mocks';
import useIsPortrait from '../useIsPortrait';

jest.mock('react-native', () => ({
  useWindowDimensions: jest.fn(),
}));


describe('useIsPortrait', () => {
  it('returns true when height is greater than width', () => {
    mocked(useWindowDimensions).mockReturnValue(mockedPortraitDimensions);

    const { result } = renderHook(() => useIsPortrait());

    expect(result.current).toBe(true);
  });

  it('returns false when width is greater than height', () => {
    mocked(useWindowDimensions).mockReturnValue(mockedLandScapeDimensions);

    const { result } = renderHook(() => useIsPortrait());

    expect(result.current).toBe(false);
  });

  it('updates isPortrait state when dimensions change', () => {
    const { result, rerender } = renderHook(() => useIsPortrait());

    mocked(useWindowDimensions).mockReturnValue(mockedLandScapeDimensions);
    rerender();

    expect(result.current).toBe(false);


    mocked(useWindowDimensions).mockReturnValue(mockedPortraitDimensions);
    rerender();

    expect(result.current).toBe(true);
  });
});
