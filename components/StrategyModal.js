import React, { useState } from 'react';
import { View, Modal, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import colors from '../constants/Colors'

export default function() {
  const [isOpen, setIsOpen] = useState(false);
  const [strategies, setStrategies] = useState([
    {backgroundColor: '#06D6A0', mainColor: '#fff', strategy: 'Conservative', description: 'The conservative strategy ensures a low risk blah blah blah'},
    {backgroundColor: '#4d4dff', mainColor: '#fff', strategy: 'Stable', description: 'The stable strategy blah blah blah'},
    {backgroundColor: '#ef0a29', mainColor: '#fff', strategy: 'Aggressive', description: 'The aggressive strategy says fuck risk blah blah blah'},
  ]);
  const [strategy, setStrategy] = useState(0)

  const SliderWidth = Dimensions.get('screen').width;

  const _renderStrategy = ({item}) => (
    <View style={{backgroundColor: item.backgroundColor, padding: 20, borderRadius: 4, minHeight: 400}}>
      <Text style={{fontSize: 25, color: '#fff', fontFamily: 'cambay-bold', textAlign: 'center'}}>THE {item.strategy}</Text>
      <Text style={{fontSize: 20, color: '#fff'}}>{item.description}</Text>
    </View>
  );

  return(
    <View>
      <View style={{flexDirection: 'row', marginHorizontal: 20,}}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => setIsOpen(true)} >
            <View style={{...styles.strategyButton, backgroundColor: strategies[strategy].backgroundColor}}>
              <Text style={{...styles.buttonText, color: strategies[strategy].mainColor}}>Strategy: {strategies[strategy].strategy}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={isOpen}
        onRequestClose={()=>{setIsOpen(false)}}
      >
        <View style={{
          flex: 1,
          backgroundColor: '#1a1a1a',
          paddingTop: 20,
        }}>
          <Carousel
            ref={(c) => { _carousel = c; }}
            data={strategies}
            renderItem={_renderStrategy}
            sliderWidth={SliderWidth}
            firstItem={strategy}
            itemWidth={SliderWidth - 60}
          />
          <View style={{flexDirection: 'row', marginHorizontal: 20, marginBottom: 20}}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => {
                setStrategy(_carousel.currentIndex);
                setIsOpen(false);
                }} >
                <View style={styles.modalButton}>
                  <Text style={styles.buttonText}>SUBMIT</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  buttonContainer: {
    marginTop: 20,
    marginHorizontal: 10,
    flex: 1,
  },
  modalButton: {
    alignItems: 'center',
    backgroundColor: colors.backgroundColor3,
    borderRadius: 0,
    padding: 5
  },
  strategyButton: {
    alignItems: 'center',
    borderRadius: 4,
    // borderWidth: 5,
    padding: 5
  },
  buttonText: {
    textAlign: 'center',
    padding: 6,
    fontFamily:'cambay-bold',
    fontSize: 17,
    color: '#fff'
  }
});
