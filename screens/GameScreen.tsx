import { View, Text, StyleSheet } from 'react-native'

import { useState } from 'react'
import Title from '../components/UI/Title'

function generateRandomBetween(min: number, max: number, exclude: number) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }
}

interface GameScreenProps {
    chosenNumber: number
}
export default function GameScreen({ chosenNumber }: GameScreenProps) {
    const initialGuess = generateRandomBetween(1, 100, chosenNumber)
    const [currentGuess, setCurrentGuess] = useState<number>(initialGuess)
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {/* Guess here */}
            <View>
                <Text>Higher or lower?</Text>
                {/* plus and minus buttons */}
            </View>
            <View>{/* log the rounds */}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
})
