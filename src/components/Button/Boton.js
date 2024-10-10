import { ActivityIndicator, Modal, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

const BotonC = (props) => {
    const {
        color = 'green',
        text = 'Iniciar',
        contenedorStilo,
        onPress
    } = props;

    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: color}, contenedorStilo]} onPress={onPress}>
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    )
};

export default BotonC;