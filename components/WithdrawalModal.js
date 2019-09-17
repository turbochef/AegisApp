import React, { useState } from 'react';
import { View, Modal, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../constants/Colors';
import Button from '../components/Button';
export default function() {

  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false)
  const [withdrawAmount, setWithdrawAmount] = useState(0)

  return (
    <View style={styles.buttonContainer}>
      <Button 
        onPress={() => setWithdrawModalOpen(true)}
        name="Withdraw"
      />
      <Modal 
        onRequestClose={()=> {setWithdrawModalOpen(false)}}
        animationType="slide"
        transparent={false}
        visible={withdrawModalOpen}
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
  button: {
    alignItems: 'center',
    backgroundColor: colors.backgroundColor3,
    borderRadius: 4,
    padding: 5
  },
  buttonText: {
    textAlign: 'center',
    padding: 6,
    fontFamily:'cambay-bold',
    fontSize: 17,
    color: colors.textColor1
  }
});
