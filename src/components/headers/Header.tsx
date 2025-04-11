import React, { PropsWithChildren } from 'react';
import { Text, View, StyleProp, ViewStyle } from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

type HeaderProps = PropsWithChildren<{
  title: string;
}>;

const Header = ({ title }: HeaderProps): React.JSX.Element => {
  const { top } = { top: 20 }; // useSafeAreaInsets();

  const containerStyle: StyleProp<ViewStyle> = {
    paddingTop: top,
    backgroundColor: 'white',
    height: 50 + top,
  };

  return (
    <View style={containerStyle}>
      <Text>{title}</Text>
    </View>
  );
};

export default Header;
