import Colors from '@core/utils/Colors';
import { APP_THEME } from '@core/utils/constants';
import Grid from '@maui/Grid';
import Text from '@maui/Text';
import ViIcon from '@maui/ViIcon';
import React from 'react';
import { StyleSheet, TextStyle, TouchableOpacity, TouchableOpacityProps } from 'react-native';


export interface ButtonProps extends TouchableOpacityProps {
  title: string | number;
  titleStyle?: TextStyle;
  icon?: string;
  iconSize?: number;
  iconColor?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { title, style, titleStyle, icon, iconSize, iconColor, ...rest } = props;

  return (
    <TouchableOpacity style={[styles.button, StyleSheet.flatten(style)]} {...rest}>
      <Grid.Row align="center" justify="center">
        {!!icon && (
          <ViIcon name={icon} size={iconSize} color={iconColor} style={{ marginRight: 15 }} />
        )}
        <Text style={[styles.buttonText, StyleSheet.flatten(titleStyle)]} title={title} />
      </Grid.Row>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.variant.info.text[APP_THEME],
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    color: Colors.screen.bgcolor,
  },
});

Button.displayName = 'Button';
export default Button;
