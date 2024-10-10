import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const ApiUrl = 'https://dev.obtenmas.com/catom/api/challenge/banks';
const StorageKey = 'ListaBancos';

export const fetchBancos = async () => {
    try {
        const storedBanks = await AsyncStorage.getItem(StorageKey);
        if (storedBanks) {
            return JSON.parse(storedBanks);
        }
        const resultado = await axios.get(ApiUrl);
        await AsyncStorage.setItem(StorageKey, JSON.stringify(resultado?.data));
        return resultado?.data;
    } catch (error) {
        console.error('Error de la consulta: ', error);
        return error;
    }
}