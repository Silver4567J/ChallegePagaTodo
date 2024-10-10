import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalFondo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        backgroundColor: '#fff',
        maxWidth: '95%',
        width: 'auto'
    },
    txt1: {
        textAlign: 'center',
        fontSize: 16,
        color: 'green',
        paddingTop: 10
    }
});