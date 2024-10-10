import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const ApiUrl = 'https://dev.obtenmas.com/catom/api/challenge/banks';
const StorageKey = 'ListaBancos';

export const fetchBancos = async () => {
    try {
        const resultado = await axios.get(ApiUrl);
        await AsyncStorage.setItem(StorageKey, JSON.stringify(resultado?.data));
        return resultado?.data;
    } catch (error) {
        console.error('Error de la consulta: ', error);
        throw error;
    }
}

export const fetchBancosAlmacenado = async () => {
    try {
        const bancoAlmacenado = await AsyncStorage.getItem(StorageKey);
        if (bancoAlmacenado) {
            return JSON.parse(bancoAlmacenado);
        } else {
            return await fetchBancos();
        }
    } catch (error) {
        console.error('Fallo en el alamcenamiento de los bancos: ', error);
        throw error
    }
};

export const limpiarAlmacenamiento = async () => {
    try {
        await AsyncStorage.removeItem(StorageKey);
    } catch (error) {
        console.error('Fallo al borrar la informacion: ', error);
        throw error;
    }
};