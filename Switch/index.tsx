import React from 'react'
import { Pressable } from 'react-native'
import { StyleProp, ViewStyle } from 'react-native'

export type SwitchProps = {
    onValueChange: Function,
    disabled: boolean,
    activeText: string,
    inActiveText: string,
    backgroundActive: string,
    backgroundInactive: string,
    value: boolean,
    circleActiveColor: string,
    circleInActiveColor: string,
    circleSize: number,
    circleBorderActiveColor: string,
    circleBorderInactiveColor: string,
    activeTextStyle: ViewStyle,
    inactiveTextStyle: ViewStyle,
    containerStyle: object,
    barHeight: number,
    circleBorderWidth: number,
    renderInsideCircle: Function,
    changeValueImmediately: boolean,
    innerCircleStyle: ViewStyle,
    outerCircleStyle: ViewStyle,
    renderActiveText: boolean,
    renderInActiveText: boolean,
    switchLeftPx: number,
    switchRightPx: number,
    switchWidthMultiplier: number,
    switchBorderRadius: number
}

const Switch: React.FC<SwitchProps> = (props) => {

    return (
        <Pressable>

        </Pressable>
    )
}

export default Switch