import { View, StyleSheet, Alert } from 'react-native'

import { useEffect, useState } from 'react'
import Title from '../components/UI/Title'
import NumberContainer from '../components/Game/NumberContainer'
import PrimaryButton from '../components/UI/PrimaryButton'
import Card from '../components/UI/Card'
import Instruction from '../components/UI/Instruction'

function generateRandomBetween(min: number, max: number, exclude: number) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }
}

let minBoundary = 1
let maxBoundary = 100

interface GameScreenProps {
    chosenNumber: number
    onGameOver: () => void
}
export default function GameScreen({
    chosenNumber,
    onGameOver,
}: GameScreenProps) {
    const initialGuess = generateRandomBetween(1, 100, chosenNumber)
    const [currentGuess, setCurrentGuess] = useState<number>(initialGuess)

    useEffect(() => {
        if (currentGuess === chosenNumber) {
            onGameOver()
        }
    }, [currentGuess, chosenNumber, onGameOver])

    function nextGuessHandler(direction: 'lower' | 'greater') {
        if (
            (direction === 'lower' && currentGuess < chosenNumber) ||
            (direction === 'greater' && currentGuess > chosenNumber)
        ) {
            Alert.alert("Don't lie", 'You know that this is wrong ...', [
                { text: 'Sorry!', style: 'cancel' },
            ])
            return
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess
        } else {
            minBoundary = currentGuess + 1
        }
        const newRandomNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        )
        setCurrentGuess(newRandomNumber)
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {/* Guess here */}
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <Instruction style={styles.instructionText}>
                    Higher or lower?
                </Instruction>
                {/* plus and minus buttons */}
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={() => nextGuessHandler('lower')}
                        >
                            -
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={() => nextGuessHandler('greater')}
                        >
                            +
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View>{/* log the rounds */}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
    instructionText: {
        marginBottom: 12,
    },
})
