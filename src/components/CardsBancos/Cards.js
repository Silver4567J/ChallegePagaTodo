import { ActivityIndicator, Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

const CardsBancos = (props) => {
    const {
        nombre = '',
        descripcion = '',
        img,
        edad
    } = props;

    return (
        <View style={styles.CajaPadre}>
            <View style={styles.items}>
                <View style={styles.cB1}>
                    <Image source={{ uri: img }} style={styles.cB2} resizeMode='cover' />
                </View>
                <View style={styles.cB3}>
                    <Text style={styles.nombre}>{nombre}</Text>
                    <Text style={styles.descripcion}>{descripcion}</Text>
                    <Text style={styles.edad}>Edad: {edad}</Text>
                </View>
            </View>
        </View>
    )
};

export default CardsBancos;