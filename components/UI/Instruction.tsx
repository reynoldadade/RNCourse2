import { StyleSheet, Text } from 'react-native'
import Colors from '../../constants/colors'

interface InstructionProps {
    children: React.ReactNode
}
export default function Instruction({ children }: InstructionProps) {
    return <Text style={styles.instructionText}>{children}</Text>
}

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
    },
})
