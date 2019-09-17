import colors from './Colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    marginHorizontal: 20,
    backgroundColor: colors.cardColor,
    elevation: 4,
    marginBottom: 20,
    borderRadius: 4,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  cardContainer: {
    padding: 20,
  },
  cardTitle: {
    color: colors.cardTitle,
    fontSize: 20,
    fontFamily: 'serif-bold',
    height: 25,
    marginBottom: 15,
  },
  bodyContainer:{
    elevation: 4
  },
  headerContainer: {
    backgroundColor: colors.highlightColor,
    paddingTop: 40,
    marginBottom: -100,
    paddingBottom: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  cardText: {
    color: colors.cardText,
    fontSize: 25,
    fontFamily: 'cambay-bold',
    height: 29,
  },
  cardSubtext: {
    color: colors.cardSubText,
    fontFamily: 'cambay',
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    marginHorizontal: 10,
    marginBottom: 20, 
    flexDirection: 'row',
    alignContent: 'stretch',
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 10,
  },
  tooltipContainer:{
    marginBottom: 15,
    width: '100%',
  },
  tooltip: {
    color: colors.tooltipColor,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 40,
  },
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    elevation: 0,
    paddingBottom: 120,
  },
  title: {
    color: colors.titleColor,
    fontSize: 15,
    marginHorizontal: 30,
    fontFamily: 'serif-bold',
    textShadowColor: colors.highlightShadowColor,
    textShadowOffset: {height: 2, width: 0},
    textShadowRadius: 3,
  },
  header: {
    fontFamily: 'cambay-bold',
    fontSize: 60,
    marginHorizontal: 30,
    marginVertical: 0,
    color:colors.headerColor,
    textShadowColor: colors.highlightShadowColor,
    textShadowOffset: {height: 2, width: 0},
    textShadowRadius: 3,
  },
  loadingContainer:{
    backgroundColor: colors.loadingColor,
    height: 10,
    flexBasis: 1,
    borderRadius: 4,
    overflow: 'hidden'
  },
  loadingBar: {
    backgroundColor: colors.highlightColor,
    height: 10,
    width: '20%'
  },
});