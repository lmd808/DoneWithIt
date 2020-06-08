import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import { FlatList } from 'react-native-gesture-handler'

export default function AccountScreen() {
    return (
        <Screen>
            <View style={styles.container}>
            <ListItem title={'Name'} subtitle={'email'} image={require('../assets/face.jpg')}/>
            </View>
            <View style={styles.container}>
                <FlatList/>
            </View>
        </Screen>
        )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    }
})
