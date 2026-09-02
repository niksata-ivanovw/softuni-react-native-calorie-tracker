import { Text, Modal, View, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
    const [show, setShow] = useState(false)

    const handleShowModal = () => {
      setShow(!show)
    }

    return (
        <View style={{paddingTop: 100, flexDirection: 'row', justifyContent: 'center', gap: 10}}>
            <Modal
              animationType='slide'
              visible={show}>
              <TouchableOpacity onPress={handleShowModal}>
                <View style={{backgroundColor: 'red', padding: 10, borderRadius: 5}}>
                  <Text style={{color: 'white'}}>
                    Close Modal
                  </Text>
                </View>
              </TouchableOpacity>
            </Modal>

            <TouchableOpacity onPress={handleShowModal}>
                <View style={{backgroundColor: 'green', padding: 10, borderRadius: 5}}>
                    <Text style={{color: 'white'}}>
                        Show Modal
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}