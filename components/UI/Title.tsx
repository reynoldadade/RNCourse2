import { StyleSheet, Text } from 'react-native'
import Colors from '../../constants/colors'

interface TitleProps {
    children: React.ReactNode
}
export default function Title({ children }: TitleProps) {
    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.accent600,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.accent600,
        padding: 12,
    },
})
