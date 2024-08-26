
import { useWindowDimensions } from 'react-native';
import { useState, useEffect } from 'react';

const useIsPortrait = () => {
  const { width, height } = useWindowDimensions();
  const [isPortrait, setIsPortrait] = useState(height > width);

  useEffect(() => {
    setIsPortrait(height > width);
  }, [width, height]);

  return isPortrait;
};

export default useIsPortrait;
