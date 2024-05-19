import React, { forwardRef } from "react";
import { View } from "react-native";

import Flex, { FlexProps } from "./Flex";

export interface ColProps extends Omit<FlexProps, 'direction'> {
  reverse?: boolean;
}

const Col = forwardRef<View, ColProps>(
  function Col(props, ref) {

    const { children, reverse, ...rest } = props;

    return (
      <Flex {...rest} ref={ref} direction={reverse ? 're-col' : 'col'}>
        { children }
      </Flex>
    );
  }
);

Col.displayName = 'Grid.Col';
export default Col;
