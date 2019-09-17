import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Modal,
  TouchableOpacity,
} from 'react-native';
import formatMoney from '../utils/currency';
import colors from '../constants/Colors'

export default function TransactionHistory(){
  const [history, setHistory] = useState([]);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [accounts, setAccounts] = useState([
    {id: 0, name: 'Daniel Checking'},
    {id: 1, name: 'Michelle Checking'},
    {id: 2, name: 'Joint Checking'},
  ]);

  useEffect(() => {
    setHistory([
      {id: 1, type: "W",account: 0, amount: 12134.11, date: '7-22-2019', endAmount: 144221.42},
      {id: 2, type: "D",account: 1, amount: 334.11, date: '7-22-2019', endAmount: 143887.22},
      {id: 3, type: "W",account: 2, amount: 914.11, date: '7-22-2019', endAmount: 142910.11},
      {id: 4, type: "W",account: 1, amount: 224.11, date: '7-22-2019', endAmount: 140000.32},
      {id: 5, type: "D",account: 0, amount: 134.11, date: '7-22-2019', endAmount: 139774.64},
      {id: 6, type: "W",account: 0, amount: 12134.11, date: '7-22-2019', endAmount: 144221.42},
      {id: 7, type: "D",account: 1, amount: 334.11, date: '7-22-2019', endAmount: 143887.22},
      {id: 8, type: "W",account: 2, amount: 914.11, date: '7-22-2019', endAmount: 142910.11},
      {id: 9, type: "W",account: 1, amount: 224.11, date: '7-22-2019', endAmount: 140000.32},
      {id: 10, type: "D",account: 0, amount: 134.11, date: '7-22-2019', endAmount: 139774.64},
      {id: 11, type: "W",account: 0, amount: 12134.11, date: '7-22-2019', endAmount: 144221.42},
      {id: 12, type: "D",account: 1, amount: 334.11, date: '7-22-2019', endAmount: 143887.22},
      {id: 13, type: "W",account: 2, amount: 914.11, date: '7-22-2019', endAmount: 142910.11},
      {id: 14, type: "W",account: 1, amount: 224.11, date: '7-22-2019', endAmount: 140000.32},
      {id: 15, type: "D",account: 0, amount: 134.11, date: '7-22-2019', endAmount: 139774.64},
    ])
  });

  return (
    <View>
      <TouchableOpacity onPress={() => {setHistoryOpen(true)}}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Transaction History</Text>
        </View>
      </TouchableOpacity>
      <Modal 
        onRequestClose={()=> {setHistoryOpen(false)}}
        animationType="slide"
        transparent={false}
        visible={historyOpen}
      >
        <View style={{
          flex: 1,
          backgroundColor: colors.backgroundColor1,
        }}>
          <Text style={{
            fontSize: 30,
            fontFamily: 'cambay-bold',
            paddingHorizontal: 30,
            paddingTop: 20,
            color: colors.highlight1,
            borderBottomColor: colors.highlight1,
            borderBottomWidth: 6,
          }}>Transaction History</Text>
          <FlatList
            data={history}
            renderItem={({ item }) => (
              <View style={{...styles.historyItem, backgroundColor:item.type === 'W' ? '#cc0e0e' : colors.highlight2 }}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.item}>{item.date}</Text>
                  <Text style={styles.item}>{accounts[item.account].name}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.item}>${item.type === 'W' && '('}{formatMoney(item.amount)}{item.type === 'W' && ')'}</Text>
                  <Text style={styles.item}>${formatMoney(item.endAmount)}</Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  historyItem:{
    marginBottom: 20,
    marginHorizontal: 30,
    borderRadius: 6,
  },
  item: {
    color: '#fff',
    padding: 10,
    fontSize: 20,
    height: 44,
    fontFamily:'cambay-bold'
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.backgroundColor3,
    borderRadius: 5,
    padding: 5,
    marginBottom: 15,
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