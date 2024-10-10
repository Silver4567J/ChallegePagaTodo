import { ActivityIndicator, Modal, Text, View } from "react-native";
import { styles } from "./styles";

const Loader = (props) => {
    const {
        visible
    } = props;

    return (
        <Modal
            transparent={true}
            animationType='slide'
            visible={visible}
        >
            <View style={styles.modalFondo}>
                <View style={styles.modalView}>
                    <ActivityIndicator color={'green'} size={'large'}/>
                    <Text style={styles.txt1}>Cargando...</Text>
                </View>
            </View>
        </Modal>
    )
};

export default Loader;