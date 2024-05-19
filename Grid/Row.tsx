import React, { forwardRef, PropsWithChildren } from "react";
import { View } from "react-native";

import Flex, { FlexProps } from "./Flex";

export interface RowProps extends Omit<FlexProps, 'direction'> {
  reverse?: boolean;
}

const Row = forwardRef<View, PropsWithChildren<RowProps>>(
  function Row(props, ref) {

    const { children, reverse, ...rest } = props;

    return (
      <Flex {...rest} ref={ref} direction={reverse ? 're-row' : 'row'}>
        {children}
      </Flex>
    );
  }
);

Row.displayName = 'Grid.Row';
export default Row;
