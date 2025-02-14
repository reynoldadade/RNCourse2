import {
    View,
    Text,
    Pressable,
    GestureResponderEvent,
    StyleSheet,
} from 'react-native'

import Colors from '../../constants/colors'

interface PrimaryButtonProps {
    children: React.ReactNode
    onPress: (event: GestureResponderEvent) => void
}

export default function PrimaryButton({
    children,
    onPress,
}: PrimaryButtonProps) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={onPress}
                android_ripple={{
                    color: Colors.primary600,
                }}
                style={({ pressed }) =>
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    },
})
