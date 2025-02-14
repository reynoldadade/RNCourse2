import { StatusBar } from 'expo-status-bar'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import StartGameScreen from './screens/StartGameScreen'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import GameScreen from './screens/GameScreen'
import Colors from './constants/colors'

export default function App() {
    const [userNumber, setUserNumber] = useState<number>()

    function pickedNumberHandler(pickedNumber: number) {
        setUserNumber(pickedNumber)
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />
    if (userNumber) {
        screen = <GameScreen />
    }
    return (
        <>
            <StatusBar style="light" />

            <LinearGradient
                style={styles.rootScreen}
                colors={[Colors.accent500, Colors.primary700]}
            >
                <ImageBackground
                    source={require('./assets/images/background.png')}
                    resizeMode="cover"
                    style={styles.rootScreen}
                    imageStyle={styles.backgroundImageStayle}
                >
                    <SafeAreaView style={styles.rootScreen}>
                        {screen}
                    </SafeAreaView>
                </ImageBackground>
            </LinearGradient>
        </>
    )
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroundImageStayle: {
        opacity: 0.15,
    },
})
