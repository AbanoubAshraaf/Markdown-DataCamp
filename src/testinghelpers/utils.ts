import { RenderResult } from "@testing-library/react-native";

interface Screen extends RenderResult {
    isDetached?: boolean;
}

export const createSnapShot = (screen: Screen) => {
    expect(screen).toMatchSnapshot();
  };