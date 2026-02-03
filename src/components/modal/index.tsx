import { PropsWithChildren } from 'react';
import { Modal, View, Text, Alert, TouchableOpacity } from 'react-native';
import { style } from './style';
import { FontAwesome6 } from '@expo/vector-icons';
import { theme } from '../../global/themes';

interface ModalProps {
    modalVisible: boolean;
    headerTitle: string;
    buttonTitle: string;
    onClose: () => void;
    onAction: () => void;
}

export function toggleModal({
    modalVisible, 
    headerTitle,
    buttonTitle,
    onClose,
    onAction,
    children
} : PropsWithChildren<ModalProps>) {
 // Function to toggle modal visibility
    return(
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={onClose}
          >
            <View style={style.container}>
                <View style={style.modalView}>
                    <View style={style.headerModal}>
                        <Text style={style.headerTitle}>{headerTitle}</Text>
                        <TouchableOpacity onPress={onClose} style={style.closeButton}>
                            <FontAwesome6 name="window-close" size={34} color={theme.colors.white} />
                        </TouchableOpacity>
                    </View>
                    <View>{children}</View>
                    <View>
                        <TouchableOpacity onPress={onAction}>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}