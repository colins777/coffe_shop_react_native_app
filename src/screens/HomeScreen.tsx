import React, {useState} from "react";
import {ScrollView, StatusBar, StyleSheet, Text, View} from "react-native";
//import {useStore} from "../store/store";
import {useStore} from "../store/store";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";
import {COLORS} from "../theme/theme";
import HeaderBar from "../components/HeaderBar";


//get all cat names from CoffeeData
const getCategoriesFromData = (data: any) => {
    let catObj:any = {};

    for (let i = 0; i > data.length; i++) {
        if (catObj[data[i].name] == undefined) {
            catObj[data[i].name] = 1;
        } else {
            catObj[data[i].name]++;
        }
    }

    //get cat from formed object and make array
    let categories = Object.keys(catObj);
    //set first cat - All
    categories.unshift('All');

    return categories;
};

const getCoffeeList = (category: string, data: any) => {
    if (category === 'All') {
        return data;
    } else {
        let coffeeList = data.filter((item:any) => {
            return item.name === category;
        });

        return coffeeList;

    }
};

const HomeScreen = () => {

    const CoffeeList = useStore((state: any) => state.CoffeeList);
    const BeanList = useStore((state: any) => state.BeanList);

    const [categories, setCategories] = useState(getCategoriesFromData(CoffeeList));
    const [searchText, setSearchText] = useState(undefined);
    const [categoryIndex, setCategoryIndex] = useState({
        index: 0,
        category: categories[0],
    });

    const [sortedCoffee, setSortedCoffee] = useState(
        getCoffeeList(categoryIndex.category, CoffeeList)
    );

   // console.log('Coffee List = ', CoffeeList);
    console.log('categories = ', categories);

    const tabBarHeight = useBottomTabBarHeight();

    return (
        <View style={styles.ScreenContainer}>
            {/*<Text>HomeScreen 111</Text>*/}
            <StatusBar backgroundColor={COLORS.primaryBlackHex} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.ScrollViewText}
            >

                <HeaderBar />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex
    },
    ScrollViewText: {
        flexGrow: 1
    }
});

export default HomeScreen;
