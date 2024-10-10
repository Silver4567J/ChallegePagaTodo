import axios from "axios";

const ApiUrl = 'https://dev.obtenmas.com/catom/api/challenge/banks'

export const fetchBancos = async () => {
    try {
        const resultado = await axios.get(ApiUrl);
        return resultado?.data;
    } catch (error) {
        console.log('Error de la consulta: ', error);
        return error;
    }
}