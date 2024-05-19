import React, { forwardRef, ReactNode } from "react";
import { Pressable, PressableProps, PressableStateCallbackType, StyleSheet, View, ViewProps, ViewStyle } from "react-native";

import { AlignItems, Direction, JustifyContent } from "./type";
import { ALIGNS, DIRECTIONS, JUSTIFY } from "./utils";
import flatternPressableStyle from "@core/utils/flatternPressableStyle";

export interface FlexProps extends PressableProps {
  align?: AlignItems;
  justify?: JustifyContent;
  direction?: Direction;
  children?: ReactNode | ((state: PressableStateCallbackType) => ReactNode)
}

const Flex = forwardRef<View, FlexProps>(
  function Flex(props, ref) {

    const {
      align = 'start',
      justify = 'start',
      style,
      children,
      direction = 'row',
      onPress,
      ...rest
    } = props;

    if (!onPress) {
      return (
        <View
          {...rest as ViewProps}
          ref={ref}
          style={[
            StyleSheet.flatten(style as ViewStyle),
            {
              flexDirection: DIRECTIONS[direction],
              alignItems: ALIGNS[align],
              justifyContent: JUSTIFY[justify]
            }
          ]}
        >
          {children as ReactNode}
        </View>
      )
    }

    return (
      <Pressable
        {...rest}
        ref={ref}
        style={flatternPressableStyle([
          style,
          {
            flexDirection: DIRECTIONS[direction],
            alignItems: ALIGNS[align],
            justifyContent: JUSTIFY[justify]
          }
        ])}
        onPress={onPress}
      >
        {children}
      </Pressable>
    );
  }
);

Flex.displayName = 'Grid.Flex';
export default Flex;
