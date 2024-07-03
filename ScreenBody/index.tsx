import { Theme } from '@constants/colors';
import SafeView, { SafeViewProps } from '@maui/SafeView';
import { useThemedStyles } from '@providers/Theme';
import React, { forwardRef, PropsWithChildren } from 'react';
import { ScrollView, StyleProp, StyleSheet, ViewStyle } from 'react-native';

export interface ScreenBodyProps extends SafeViewProps {
  style?: StyleProp<ViewStyle>;
}

const ScreenBody = forwardRef<ScrollView, PropsWithChildren<ScreenBodyProps>>(
  function ScreenBody(props, ref) {
    const { children, statusBar, scroll, style, safe } = props;
    const ownStyle = useThemedStyles(styles)

    return (
      <SafeView
        ref={ref}
        statusBar={statusBar}
        safe={safe}
        scroll={{
          ...scroll,
          style: [ownStyle.body, StyleSheet.flatten(scroll?.style), StyleSheet.flatten(style)],
        }}
      >
        {children}
      </SafeView>
    );
  }
);

const styles = (theme: Theme) => {
  return StyleSheet.create({
    body: {
      height: '100%',
      width: '100%',
      backgroundColor: theme.background
    },
  });
}

ScreenBody.displayName = 'Screen.Body';
export default ScreenBody;
