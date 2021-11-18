import React from 'react';
import ThemeText from '../UI/ThemeText';
import { Image, StyleSheet, View } from 'react-native';

function Card({ character: { name, gender, species, status, image, origin, created }, dark }) {
    return <View style={[styles.character, {backgroundColor: dark ? 'rgb(60, 62, 68)' : 'rgb(190, 190, 190)'}]}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: image}}/>
        </View>
        <View style={styles.infoContainer}>
            <ThemeText style={styles.title}>{name}</ThemeText>
            <ThemeText style={styles.description}>{status}-{species}</ThemeText>
            <ThemeText style={styles.description}>Gender: {gender}</ThemeText>
            <ThemeText style={styles.description}>Create Date: {created.substring(0, 10)}</ThemeText>
            <ThemeText style={styles.description}>Last known location:</ThemeText>
            <ThemeText style={styles.description}>{origin.name}</ThemeText>
        </View>
    </View>;
}

export default Card;

const styles = StyleSheet.create({
    character: {
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginVertical: 5,
    },
    imageContainer: {
        width: '40%',
        height: '100%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    infoContainer: {
        flexDirection: 'column',
        marginLeft: 10,
        marginTop: 5
    },
    title: {
        fontSize: 24,
        fontWeight: '700'
    },
    description: {
        fontSize: 15
    }
});