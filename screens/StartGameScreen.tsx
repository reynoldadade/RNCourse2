import { TextInput, View, StyleSheet } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

export default function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
            />
            {/* Buttons here */}
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        backgroundColor: '#4e0329',
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: '#ddb53f',
        borderBottomWidth: 2,
        color: '#ddb53f',
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
