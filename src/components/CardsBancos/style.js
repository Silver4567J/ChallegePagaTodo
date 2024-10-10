import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    CajaPadre: {
        backgroundColor: '#fff',
        borderRadius: 20,
        marginVertical: 10,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        height: 'auto',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    items: {
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    cB1: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center'
    },
    cB2: {
        width: 75,
        height: 75,
        borderRadius: 10
    },
    cB3: {
        flex: 3,
    },
    nombre: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingVertical: 5
    },
    descripcion: {
        paddingHorizontal: 10,
        textAlign: 'center',
        paddingVertical: 5
    },
    edad: {
        textAlign: 'center'
    }
});