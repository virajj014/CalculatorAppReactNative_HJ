import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import logo from '../assets/calculatorlogo.png'
const IntroScreen = () => {
    return (
        <View style={styles.container}>
            {/* <Text>IntroScreen</Text> */}
            <View style={styles.inner}>
                <Image source={logo} style={styles.innerimg} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: "100%",
        backgroundColor: '#FF5757',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inner: {
        display: 'flex',
        flexDirection: 'row',
        width: 100,
        height: 100,
        backgroundColor: 'inherit',
    },
    innerimg: {
        width: 100,
        height: 100,

    }
})
export default IntroScreen