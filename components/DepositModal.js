import React, { useState } from 'react';
import { View, Modal, StyleSheet, TouchableOpacity, Text } from 'react-native';
import colors from '../constants/Colors';
import Button from './Button';

export default function() {

  const [depositModalOpen, setDepositModalOpen] = useState(false)
  const [depositAmount, setDepositAmount] = useState(0)

  return (
    <View style={styles.buttonContainer}>
      <Button 
        onPress={() => setDepositModalOpen(true)}
        name="Deposit"
      />
      <Modal 
        onRequestClose={()=> {setDepositModalOpen(false)}}
        animationType="slide"
        transparent={false}
        visible={depositModalOpen}
      >
        <View style={{
          flex: 1,
          backgroundColor: colors.backgroundColor3,
          paddingTop: 20,
        }}>
        </View>
      </Modal>
    </View>
  )
}


const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
    marginHorizontal: 10,
    flex: 1,
  },
});
