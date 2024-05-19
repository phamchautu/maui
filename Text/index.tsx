import React, { forwardRef, useMemo } from "react";
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { useTranslation } from 'react-i18next';
import ucfirst from "@core/utils/ucfirst";
import capitalize from '@core/utils/capitalize'

export type TextRef = RNText;

export interface TextProps extends RNTextProps {
    title: string | number | null;
    textTransform?: 'uppercase' | 'lowercase' | 'ucfirst' | 'capitalize';
}

const Text = forwardRef<TextRef, TextProps>(
    function Text(props, ref) {

        const { title, textTransform, ...rest } = props;
        const { t } = useTranslation();

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
        }, [title]);

        return (
            <RNText
                {...rest}
                ref={ref}
            >
                {text}
            </RNText>
        );
    }
);

Text.displayName = 'Text';
export default Text;