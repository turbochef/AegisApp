import React, {useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import { AreaChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import {
  Dimensions,
  Text,
  View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import formatMoney from '../utils/currency';
import colors from '../constants/Colors'
import common from '../constants/Styles';


export default function PerformanceCarousel(){

  const SliderWidth = Dimensions.get('screen').width;

  const _renderItem = ({item, index}) => (
    <View style={{paddingVertical: 20, paddingHorizontal: 5}}>
      <View style={{
        backgroundColor: colors.cardColor,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        borderRadius: 4,
        overflow: 'hidden',
      }}>
        <View style={{
          paddingTop:20, 
          paddingHorizontal: 20, 
          width: '100%',
        }}>
          <Text style={common.cardTitle}>{item.timeframe}</Text>
          <Text style={common.cardText}>
            ${formatMoney(item.amount)} 
            <MaterialCommunityIcons
              name="arrow-top-right-thick"
              size={20}
              style={{textAlignVertical: 'bottom'}}
              color={colors.highlightColor}
            />
          </Text>
          <Text style={common.cardSubtext}>{item.change}%</Text>
        </View>
        <View>
          <AreaChart
            style={{ height: 80, width: SliderWidth - 80}}
            contentInset={{ top: 0, bottom: 0 }}
            data={item.chart}
            curve={shape.curveNatural}
            svg={{
              strokeWidth: 4,
              fill: colors.highlightColor,
              stroke: colors.highlightColor,
            }}
          >
          </AreaChart>
        </View>
      </View>
    </View>
  );


  return(
    <Carousel
    inactiveSlideOpacity={1}
    inactiveSlideScale={.9}
    data={[
      {change: 12.345,amount: 600.11, timeframe: 'TODAY', chart: [0,5,8,10,8,11,15,18,19,24]},
      {change: 12.345,amount: 123123.11, timeframe: 'WEEK', chart: [0,5,8,10,8,11,15,18,25,23,27,29,26]},
      {change: 12.345,amount: 123123.11, timeframe: 'MONTH', chart: [0,18,25,23,27,29,26]},
      {change: 12.345,amount: 123123.11, timeframe: '3 MONTHS', chart: [0,5,8,10,8,11,15,18,19,24]},
      {change: 12.345,amount: 123123.11, timeframe: 'YEAR', chart: [0,5,8,10,8,11,15,18,19,24]},
      {change: 12.345,amount: 123123.11, timeframe: 'ALL', chart: [0,18,25,23,27,29,26]},
    ]}
    renderItem={_renderItem}
    sliderWidth={SliderWidth}
    itemWidth={SliderWidth - 80}
  />
  );
}