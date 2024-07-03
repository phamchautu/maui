import { Theme } from '@constants/colors';
import { Font } from '@constants/typography';
import Grid from '@maui/Grid';
import Text from '@maui/Text';
import ViIcon from '@maui/ViIcon';
import { useTheme, useThemedStyles } from '@providers/Theme';
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
  const ownStyle = useThemedStyles(styles)

  return (
    <TouchableOpacity style={[ownStyle.button, StyleSheet.flatten(style)]} {...rest} activeOpacity={0.5}>
      <Grid.Row align="center" justify="center">
        {!!icon && (
          <ViIcon name={icon} size={iconSize} color={iconColor} style={{ marginRight: 15 }} />
        )}
        <Text style={[ownStyle.buttonText, StyleSheet.flatten(titleStyle)]} title={title} />
      </Grid.Row>
    </TouchableOpacity>
  );
};

const styles = (theme: Theme) => StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: theme.onPrimary,
  },
  buttonText: {
    textAlign: 'center',
    color: '#E0E2E8',
    fontFamily: Font.NunitoRegular,
    fontSize: 16
  },
});

Button.displayName = 'Button';
export default Button;
