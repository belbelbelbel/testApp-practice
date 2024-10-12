import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { FormTest } from '../FormTest';
export default function MesagePage() {
    return (
        <View style={styles.container}>
            <FormTest/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
    },
});
