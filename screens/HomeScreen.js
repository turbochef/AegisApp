import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DepositModal from '../components/DepositModal';
import StrategyModal from '../components/StrategyModal';
import WithdrawalModal from '../components/WithdrawalModal';
import PerformanceCarousel from '../components/PerformanceCarousel';
import colors from '../constants/Colors';
import common from '../constants/Styles';
import GoalsList from '../components/GoalsList';

export default function HomeScreen({navigation}) {

  return (
      <ScrollView
        style={common.container}
      >
        <View 
          style={common.headerContainer}
        >
          <Text style={common.title}>DASHBOARD</Text>
          <Text style={common.header}>$121,562.11</Text>
        </View>
        <View style={common.bodyContainer}>
          <PerformanceCarousel />
          {/* <View style={{flexDirection: 'row', marginHorizontal: 20,}}>
            <DepositModal/>
            <WithdrawalModal />
          </View> */}
        </View>
        {/* <StrategyModal/> */}
        <GoalsList />
      </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


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
