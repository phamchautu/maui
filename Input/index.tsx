import React, { FC, useMemo } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

import Grid from '@maui/Grid';
import Text from '@maui/Text';
import ViIcon from '@maui//ViIcon';
import { useTranslation } from 'react-i18next';
import { useTheme, useThemedStyles } from '@providers/Theme';
import { Theme } from '@constants/colors';
export interface InputProps extends TextInputProps {
  iconLeftName?: string;
  iconRightName?: string;
  onPressRightIcon?: () => void;
  error?: string;
  textRight?: string;
  iconColor?: string;
}
const Input: FC<InputProps> = (props) => {

  const { theme, isDarkTheme } = useTheme()
  const {
    error,
    iconLeftName,
    iconRightName,
    onPressRightIcon,
    style,
    placeholder = '',
    textRight = '',
    iconColor = theme.onBackground,
    ...rest
  } = props;

  const { t } = useTranslation();

  const currentError = useMemo(() => error, [error]);

  const ownStyle = useThemedStyles(styles)

  return (
    <>
      <Grid.Row
        style={[ownStyle.inputWrap, StyleSheet.flatten(style), !!error && ownStyle.errorBorder]}
      >
        {!!iconLeftName && (
          <Grid.Flex style={ownStyle.icon}>
            <ViIcon name={iconLeftName} size={16} color={iconColor} />
          </Grid.Flex>
        )}
        <TextInput style={ownStyle.input} placeholder={`${t(placeholder)}`} {...rest} />
        {!!iconRightName && (
          <Grid.Flex style={ownStyle.rightIcon} onPress={onPressRightIcon}>
            <ViIcon name={iconRightName} size={16} color={iconColor} />
          </Grid.Flex>
        )}
        {!!textRight && (
          <Grid.Flex style={ownStyle.textRight}>
            <Text title={textRight} style={{ paddingLeft: 12 }} />
          </Grid.Flex>
        )}
      </Grid.Row>
      <Grid.Flex style={ownStyle.errorWrap}>
        {!!currentError && <Text title={currentError} style={ownStyle.errorText} />}
      </Grid.Flex>
    </>
  );
};
const styles = (theme: Theme) => StyleSheet.create({
  container: {
    marginVertical: 4
  },
  input: {
    flex: 1,
    height: 48,
    alignSelf: 'center',
    fontSize: 14,
    paddingRight: 16,
    color: theme.onBackground,
  },
  inputWrap: {
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#f9f9f9',
    backgroundColor: '#f9f9f9',
  },
  icon: {
    alignSelf: 'center',
    paddingHorizontal: 16,
  },
  rightIcon: {
    alignSelf: 'center',
    paddingRight: 16,
  },
  errorWrap: {
    height: 24,
    justifyContent: 'center',
    alignContent: 'center',
  },
  errorText: {
    color: theme.error,
    alignSelf: 'center',
  },
  errorBorder: {
    borderWidth: 1,
    borderColor: theme.error,
  },
  textRight: {
    alignSelf: 'center',
    paddingRight: 16,
    borderLeftWidth: 1,
    fontSize: 16,
  },
});
Input.displayName = 'Input';
export default Input;
