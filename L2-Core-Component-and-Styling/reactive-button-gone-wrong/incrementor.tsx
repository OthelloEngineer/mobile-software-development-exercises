import { useEffect, useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native"

export const Incrementor = (props: {
    onPress: () => void
})  => {    
    const [count, setCount] = useState(1);

    useEffect(() => {
        props.onPress();
    });

    return (  
        <TouchableOpacity style={styles.button} onPress={() => {
            setCount(count + 1);
            }}>
            <Text style={styles.buttonText}>Increment Counter</Text>
            <Text style={styles.buttonText}> {count}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
    },
})
