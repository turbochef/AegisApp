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
import formatMoney from '../utils/currency';
import Button from './Button';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const goals = [
  {id: 0, name: 'Retirement', amount: 62323.00, goalAmount: 400000 },
  {id: 1, name: 'Gail College', amount: 2332.00, goalAmount: 30000},
  {id: 2, name: 'Paris!', amount: 1522.00, goalAmount: 3000},
  {id: 3, name: 'F U money', amount: 5000, goalAmount: 12000},
]


export default function() {
  return(
    <View style={common.container}>
      {
        goals.map(goal => (
          <View key={goal.id} style={common.card}>
            <View style={common.cardContainer}>
              <Text style={common.cardTitle}>{goal.name}
              <MaterialCommunityIcons
                name="arrow-right-thick"
                size={18}
                color={colors.cardTitle}
              />
              </Text>
              <Text style={common.cardText}>${formatMoney(goal.amount)}</Text>
              <Text style={common.cardSubtext}>of ${formatMoney(goal.goalAmount)} goal</Text>
              <View style={common.loadingContainer}>
                <View style={common.loadingBar}/>
              </View>
            </View>
            {/* <View style={common.tooltipContainer}>
              <Text style={common.tooltip}>Tap for more information</Text>
            </View> */}
            {/* <View style={common.buttonContainer}>
              <View style={common.buttonWrapper}>
                <Button name="DEPOSIT" />
              </View>
              <View style={common.buttonWrapper}>
                <Button name="INFO" />
              </View>
            </View> */}
          </View>
        ))
      }
    </View>
  )
};
