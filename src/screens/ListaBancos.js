import React, { useEffect, useState } from "react"
import { fetchBancos, fetchBancosAlmacenado, limpiarAlmacenamiento } from "../services/api";
import { FlatList, Text, View } from "react-native";
import Loader from "../components/LoaderIcon/Loader";
import BotonC from "../components/Button/Boton";
import CardsBancos from "../components/CardsBancos/Cards";
import { styles } from "./styles";

const ListaBancosScreen = () => {
    const [isBancos, setBancos] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        CargaDeBancos();
    }, []);

    const CargaDeBancos = async () => {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        try {
            const data = await fetchBancos();
            setBancos(data);
        } catch (error) {
            console.error('Error al llamar la peticion: ', error)
        } finally {
            setLoading(false);
        }
    };

    const CargaDeBancosAlmacenados = async () => {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        try {
            const data = await fetchBancosAlmacenado();
            setBancos(data);
        } catch (error) {
            console.error('Error al llamar la peticion: ', error)
        } finally {
            setLoading(false);
        }
    };

    const BorrarBancosAlmacenados = async () => {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        try {
            const data = await limpiarAlmacenamiento();
            setBancos(data);
        } catch (error) {
            console.error('Error al llamar la peticion: ', error)
        } finally {
            setLoading(false);
        }
    };

    const renderItemBancos = ({ item }) => {
        return (
            <CardsBancos
                img={item?.url}
                nombre={item?.bankName}
                descripcion={item?.description}
                edad={item?.age}
            />
        )
    }

    return (
        <FlatList
            data={isBancos}
            keyExtractor={(item) => item.bankName}
            renderItem={renderItemBancos}
            ListEmptyComponent={
                <View style={styles.boxText}>
                    <Text style={styles.textNoInfo}> No hay informacion de bancos, por favor inicie una consulta</Text>
                    <Loader visible={isLoading} />
                </View>
            }
            ListFooterComponent={
                <>
                    <BotonC onPress={CargaDeBancosAlmacenados} text={'Iniciar Consulta'} />
                    <BotonC onPress={BorrarBancosAlmacenados} text={'Limpiar Cache'} />
                    <Loader visible={isLoading} />
                </>
            }
        />
    );
};

export default ListaBancosScreen;