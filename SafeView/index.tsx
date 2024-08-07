import { useTheme } from '@providers/Theme';
import React, { forwardRef, PropsWithChildren } from 'react';
import { SafeAreaView, ScrollView, ScrollViewProps, StatusBar, StatusBarProps } from 'react-native';
// import Colors from '@core/utils/Colors';

export interface SafeViewProps {
  statusBar?: StatusBarProps;
  scroll?: ScrollViewProps;
  safe?: boolean;
}

export const SafeView = forwardRef<ScrollView, PropsWithChildren<SafeViewProps>>(function SafeView(
  props,
  ref
) {
  const { children, statusBar = {}, scroll = {}, safe = true } = props;
  const { isDarkTheme, theme } = useTheme()

  const _statusBar: StatusBarProps = {
    backgroundColor: theme.onPrimary,
    barStyle: isDarkTheme ? 'light-content' : 'dark-content',

    ...statusBar,
  };

  if (!safe) {
    return (
      <>
        <StatusBar {..._statusBar} />
        <ScrollView {...scroll} ref={ref}>
          {children}
        </ScrollView>
      </>
    );
  }

  return (
    <SafeAreaView>
      <StatusBar {..._statusBar} />
      <ScrollView {...scroll} ref={ref}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
});

SafeView.displayName = 'SafeView';
export default SafeView;
