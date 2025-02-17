import { TextInput, View, StyleSheet, Alert, Text } from 'react-native'
import PrimaryButton from '../components/UI/PrimaryButton'
import { useState } from 'react'
import Colors from '../constants/colors'
import Title from '../components/UI/Title'
import Card from '../components/UI/Card'
import Instruction from '../components/UI/Instruction'

interface StartGameScreenProps {
    onPickNumber: (pickedNumber: number) => void
}
export default function StartGameScreen({
    onPickNumber,
}: StartGameScreenProps) {
    const [enteredNumber, setEnteredNumber] = useState<string>('')

    function numberInputHandler(enteredText: string) {
        setEnteredNumber(enteredText)
    }
    function resetInputHandler() {
        setEnteredNumber('')
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber)

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            return Alert.alert(
                'Invalid Number!',
                'Number has to be a number between 1 and 99',
                [
                    {
                        text: 'OK',
                        style: 'destructive',
                        onPress: resetInputHandler,
                    },
                ]
            )
            // show alert
        }
        onPickNumber(chosenNumber)
    }
    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <Instruction>Enter a Number</Instruction>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                {/* Buttons here */}
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>
                            Reset
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>
                            Confirm
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
})
