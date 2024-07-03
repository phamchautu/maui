import React, { forwardRef, useMemo } from "react";
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';
import ucfirst from "@utils/ucfirst";
import capitalize from '@utils/capitalize'
import { ThemeContext, useTheme, useThemedStyles } from "src/providers/Theme";
import { Theme } from "@constants/colors";
import { Font } from "@constants/typography";
import { useTranslation } from 'react-i18next';


export type TextRef = RNText;

export interface TextProps extends RNTextProps {
    title: string | number | null;
    textTransform?: 'uppercase' | 'lowercase' | 'ucfirst' | 'capitalize';

}

const Text = forwardRef<TextRef, TextProps>(
    function Text(props, ref) {

        const { title, textTransform, ...rest } = props;
        const { t, i18n } = useTranslation();

        const style = useThemedStyles(styles)

        const text = useMemo(() => {
            let v = t(`${title}`);

            switch (textTransform) {
                case 'uppercase':
                    v = v.toUpperCase();
                    break;
                case 'lowercase':
                    v = v.toLowerCase();
                    break;
                case 'ucfirst':
                    v = ucfirst(v);
                    break;
                case 'capitalize':
                    v = capitalize(v);
                    break;
            }

            return v;
        }, [i18n.language]);

        return (
            <RNText
                {...rest}
                ref={ref}
                style={[style.text, StyleSheet.flatten(rest.style)]}
            >
                {text}
            </RNText>
        );
    }
);

const styles = (theme: Theme) => {
    return StyleSheet.create({
        text: {
            fontFamily: Font.NunitoRegular,
            fontSize: 14,
            letterSpacing: 0.2,
            color: theme.onSurface
        }
    })
}

Text.displayName = 'Text';
export default Text;