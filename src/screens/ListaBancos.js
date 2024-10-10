import React, { useEffect, useState } from "react"
import { fetchBancos } from "../services/api";
import { FlatList, Text, View } from "react-native";

const ListaBancosScreen = () => {
    const [isBancos, setBancos] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        CargaDeBancos();
    }, []);

    const CargaDeBancos = async () => {
        try {
            const data = await fetchBancos();
            setBancos(data);
        } catch (error) {
            console.log('Error al llamar la peticion: ', error)
        } finally {
            setLoading(false);
        }
    };

    if (isLoading) {
        return (
            <View>
                <Text>
                    Cargando...
                </Text>
            </View>
        )
    }

    return (
        <FlatList
            data={isBancos}
            keyExtractor={(item) => item.bankName}
            renderItem={({ item }) => (
                <View>
                    <Text>{item.bankName}</Text>
                    <Text>{item.description}</Text>
                    <Text>Edad: {item.age}</Text>
                    <Text>{item.url}</Text>
                </View>
            )}
        />
    );


};

export default ListaBancosScreen;