import {StyleSheet, Text, View} from "react-native";
import React from 'react';
import LinearGradient from "react-native-linear-gradient";
import {COLORS, SPACING} from "../theme/theme";
import CustomIcon from "./CustomIcon";


//Props
interface GradientBgIconProps {
    name: string;
    color: string;
    size: number;
}

const GradientBgIcon: React.FC<GradientBgIconProps>  = (name, color, size) => {
    return (
        <View style={styles.Container}>
            <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                style={styles.LinearGradientBG}></LinearGradient>
                <CustomIcon name={name} color={color} size={size}/>
        </View>
    );

}

const styles = StyleSheet.create({
    Container: {
        borderWidth: 2,
        borderColor: COLORS.secondaryDarkGreyHex,
        borderRadius: SPACING.space_12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.secondaryDarkGreyHex,
        overflow: 'hidden'
    },
    LinearGradientBG: {
        height: SPACING.space_36,
        width: SPACING.space_36,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default GradientBgIcon;
