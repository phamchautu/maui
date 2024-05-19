import React, { FC, useMemo } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import Colors from '@core/utils/Colors';
import { APP_THEME } from '@core/utils/constants';
import { TextSize } from '@core/utils/enum'
import Grid from '@maui/Grid';
import Text from '@maui/Text';
import ViIcon from '@maui//ViIcon';
import { useTranslation } from 'react-i18next';
export interface InputProps extends TextInputProps {
  iconLeftName?: string;
  iconRightName?: string;
  onPressRightIcon?: () => void;
  error?: string;
  textRight?: string;
  iconColor?: string;
}
const Input: FC<InputProps> = (props) => {
  const {
    error,
    iconLeftName,
    iconRightName,
    onPressRightIcon,
    style,
    placeholder = '',
    textRight = '',
    iconColor = Colors.variant.default.text[APP_THEME],
    ...rest
  } = props;
  const { t } = useTranslation();

  const currentError = useMemo(() => error, [error]);

  return (
    <>
      <Grid.Row
        style={[styles.inputWrap, StyleSheet.flatten(style), !!error && styles.errorBorder]}
      >
        {!!iconLeftName && (
          <Grid.Flex style={styles.icon}>
            <ViIcon name={iconLeftName} size={16} color={iconColor} />
          </Grid.Flex>
        )}
        <TextInput style={styles.input} placeholder={`${t(placeholder)}`} {...rest} />
        {!!iconRightName && (
          <Grid.Flex style={styles.rightIcon} onPress={onPressRightIcon}>
            <ViIcon name={iconRightName} size={16} color={iconColor} />
          </Grid.Flex>
        )}
        {!!textRight && (
          <Grid.Flex style={styles.textRight}>
            <Text title={textRight} style={{ paddingLeft: 12 }} />
          </Grid.Flex>
        )}
      </Grid.Row>
      <Grid.Flex style={styles.errorWrap}>
        {!!currentError && <Text title={currentError} style={styles.errorText} />}
      </Grid.Flex>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
  input: {
    flex: 1,
    height: 52,
    alignSelf: 'center',
    fontSize: 14,
    paddingRight: 16,
    // color: Colors.variant.default.text[APP_THEME],
  },
  inputWrap: {
    height: 52,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.variant.default.background[APP_THEME],
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
    color: Colors.active.text,
    alignSelf: 'center',
  },
  errorBorder: {
    borderWidth: 1,
    borderColor: Colors.active.text,
  },
  textRight: {
    alignSelf: 'center',
    paddingRight: 16,
    borderLeftWidth: 1,
    fontSize: TextSize.lg,
  },
});
Input.displayName = 'Input';
export default Input;
