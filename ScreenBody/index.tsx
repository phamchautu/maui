import SafeView, { SafeViewProps } from '@maui/SafeView';
import React, { forwardRef, PropsWithChildren } from 'react';
import { ScrollView, StyleProp, StyleSheet, ViewStyle } from 'react-native';

export interface ScreenBodyProps extends SafeViewProps {
  style?: StyleProp<ViewStyle>;
}

const ScreenBody = forwardRef<ScrollView, PropsWithChildren<ScreenBodyProps>>(
  function ScreenBody(props, ref) {
    const { children, statusBar, scroll, style, safe } = props;

    return (
      <SafeView
        ref={ref}
        statusBar={statusBar}
        safe={safe}
        scroll={{
          ...scroll,
          style: [styles.body, StyleSheet.flatten(scroll?.style), StyleSheet.flatten(style)],
        }}
      >
        {children}
      </SafeView>
    );
  }
);

const styles = StyleSheet.create({
  body: {
    height: '100%',
    width: '100%',
  },
});

ScreenBody.displayName = 'Screen.Body';
export default ScreenBody;
