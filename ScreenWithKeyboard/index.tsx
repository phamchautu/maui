import React, { FC, PropsWithChildren } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

export interface ScreenWithKeyboardProps { }

export const ScreenWithKeyboard: FC<PropsWithChildren<ScreenWithKeyboardProps>> = (props) => {
  const { children } = props;

  if (Platform.OS === 'ios') {
    return <KeyboardAvoidingView behavior="padding">{children}</KeyboardAvoidingView>;
  }

  return <>{children}</>;
};

ScreenWithKeyboard.displayName = 'ScreenWithKeyboard';
export default ScreenWithKeyboard;
