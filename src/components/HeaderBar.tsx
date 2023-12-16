import {StyleSheet, Text, View} from "react-native";
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from "../theme/theme";

interface HeaderBarProps {
    //The ? after title indicates that this property is optional, meaning it may or may not be present when using this component.
    title?: string
}

const HeaderBar: React.FC<HeaderBarProps> = ({title}) => {
        return (
            <View style={styles.HeaderContainer}>
                <Text style={styles.HeaderText}>{title}</Text>
            </View>
        );

}

const styles = StyleSheet.create({
    HeaderContainer: {
        padding: SPACING.space_30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    HeaderText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_20,
        color: COLORS.primaryWhiteHex
    }
});

export default HeaderBar;
