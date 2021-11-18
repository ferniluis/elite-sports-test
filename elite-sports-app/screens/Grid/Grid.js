import { useEffect, useState, useContext } from "react";
import React from 'react';
import Card from "../../components/Card/Card";
import { FlatList, StyleSheet, View, Switch } from 'react-native';
import { getFetchUrl } from "../../factories/index";
import Context from "../../store/Context";
import ThemeText from "../../components/UI/ThemeText";

function Grid() {
    const [charactersList, setCharactersList] = useState([]);
    const [darkMode, setDarkMode] = useState(false);
    const context = useContext(Context);

    useEffect(() => {
        async function getData() {
            const response = await fetch(getFetchUrl());
            const responseData = await response.json();
            setCharactersList(responseData.results);
        }
        getData();

    }, []);

    const onThemeChange = () => {
        context.setDarkMode();
        setDarkMode(previousState => !previousState);
    }

    return <View style={[styles.container, {backgroundColor: darkMode ? 'rgb(36, 40, 47)' : '#ffffff',}]}>
        <View style={styles.nav}>
            <ThemeText style={styles.navText}>Dark Mode</ThemeText>
            <Switch trackColor={{ false: "#767577", true: "#006600" }} thumbColor={"#f4f3f4"}
                ios_backgroundColor="#3e3e3e" onValueChange={onThemeChange} value={darkMode} />
        </View>
        <FlatList data={charactersList} keyExtractor={item => item.id} renderItem={itemData => <Card character={itemData.item} dark={darkMode} />} />
    </View>;
}

export default Grid;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 10,
    },
    nav: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingVertical: 10
    },
    navText: {
        fontWeight: '700',
        fontSize: 18,
        marginRight: 10
    }
});

