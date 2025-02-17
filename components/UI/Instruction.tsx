import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native'
import Colors from '../../constants/colors'

interface InstructionProps {
    children: React.ReactNode
    style?: StyleProp<TextStyle>
}
export default function Instruction({ children, style }: InstructionProps) {
    return <Text style={[styles.instructionText, style]}>{children}</Text>
}

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
    },
})
