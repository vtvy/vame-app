import React, { PropsWithChildren } from 'react';
import { StatusBar, StyleProp, View, ViewStyle } from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

type LayoutProps = PropsWithChildren<{
  safeAreaTop?: boolean;
  safeAreaBottom?: boolean;
  style?: StyleProp<ViewStyle>;
  barStyle?: 'light-content' | 'dark-content';
}>;

const Layout = ({
  barStyle = 'dark-content',
  children,
  safeAreaBottom = true,
  safeAreaTop = false,
  style = {},
}: LayoutProps): React.JSX.Element => {
  const { top, right, bottom, left } = {
    top: 10,
    right: 0,
    bottom: 0,
    left: 0,
  }; // useSafeAreaInsets();
  const layoutStyle = {
    paddingTop: safeAreaTop ? top : 0,
    paddingBottom: safeAreaBottom ? bottom : 0,
    paddingLeft: left,
    paddingRight: right,
    flex: 1,
  };

  return (
    <View style={[layoutStyle, style]}>
      <StatusBar
        barStyle={barStyle}
        backgroundColor="transparent"
        translucent
      />
      {children}
    </View>
  );
};

export default Layout;
