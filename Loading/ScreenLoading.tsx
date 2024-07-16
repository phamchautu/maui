import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export type ScreenLoadingProps = {
    visible: boolean,
}

const icon = require('assets/images/appLogo.png')

const ScreenLoading: React.FC<ScreenLoadingProps> = (props) => {
    const { visible = false } = props

    return <View style={StyleSheet.absoluteFill}>
        <Image source={icon} style={{ width: 36, }} />
    </View>
}

ScreenLoading.displayName = 'ScreenLoading'
export default ScreenLoading