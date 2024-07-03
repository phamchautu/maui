import React, { ComponentType, FC } from 'react';
import { IconProps } from 'react-native-vector-icons/Icon';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

export interface ViIconProps extends IconProps {
    size?: number
}

const IconWrapper: Record<string, ComponentType<IconProps>> = {
    ad: AntDesign,
    en: Entypo,
    ev: EvilIcons,
    fe: Feather,
    fa: FontAwesome,
    fa5: FontAwesome5,
    fa5p: FontAwesome5Pro,
    ft: Fontisto,
    fo: Foundation,
    ii: Ionicons,
    mc: MaterialCommunityIcons,
    mi: MaterialIcons,
    oc: Octicons,
    sl: SimpleLineIcons,
    zo: Zocial,
};

const ViIcon: FC<ViIconProps> = (props) => {
    const { name, size = 16, ...rest } = props;
    const [prefix, ...names] = (name || '').split('-');

    const Icon = IconWrapper[prefix || 'ad'];

    if (!Icon) {
        return null;
    }

    return <Icon {...rest} name={names.join('-')} size={size} />;
};

ViIcon.displayName = 'Icon.VectorIcon';
export default ViIcon;