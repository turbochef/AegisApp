import React from 'react';
import {
  AsyncStorage,
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import colors from '../constants/Colors'
import TransactionHistory from '../components/TransactionHistory';

export default function SettingsScreen(props) {

  const _signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Auth');
  };

  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 50,
        fontFamily: 'cambay-bold',
        paddingHorizontal: 30,
        marginBottom: 10,
        paddingTop: 40,
        color: colors.highlight1,
      }}>Account</Text>

      <TransactionHistory />

      <TouchableOpacity onPress={_signOutAsync}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
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
  item: {
    color: '#fff',
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.backgroundColor3,
    borderRadius: 5,
    padding: 5,
    marginBottom: 7,
    marginHorizontal: 20,
  },
  buttonText: {
    textAlign: 'center',
    padding: 6,
    fontFamily:'cambay-bold',
    fontSize: 17,
    color: colors.textColor1
  }
});



SettingsScreen.navigationOptions = {
  header: null,
};
