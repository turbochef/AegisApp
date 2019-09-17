import React, { useState } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  AsyncStorage,
  View,
  Picker,
  TextInput,
  Button,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import FormInput from '../components/FormInput';
import colors from '../constants/Colors'

export default function SignUpScreen({navigation}){
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [ssn, setSsn] = useState("");
  const [phone, setPhone] = useState("");
  const today = new Date();
  const todayFormatted = `${today.getMonth()}-${today.getDate()}-${today.getFullYear() - 18}`;
  const [dob, setDob] = useState(todayFormatted);
  const [address1, setAddress1] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");


  _signUpAsync = async () => {
    await AsyncStorage.setItem('userToken', 'test');
    navigation.navigate('App');
  };

  return (
    <ImageBackground 
      style={styles.contentContainer}
      source={require('../assets/images/business.jpg')}
    >
      <View>
        <Text style={{
          fontSize: 45,
          marginBottom: 30,
          fontFamily:'cambay-bold',
          textAlign: 'center',
          color: '#9e9',
          backgroundColor: 'rgba(255,255,255,.9)',
        }}>Sign Up to Aegis</Text>
        { step === 0 &&
          <View>
            <FormInput autoCorrect={false} label="Name" value={name} onChange={setName} autoCompleteType="name" />
            <FormInput keyboardType="email-address" autoCorrect={false} autoCapitalize="none" label="Email" value={email} onChange={setEmail} autoCompleteType="email" />
            <FormInput autoCorrect={false} autoCapitalize="none" label="Password" value={password} onChange={setPassword} autoCompleteType="password" secureTextEntry />
          </View>
        }
        { step === 1 && 
          <View>
            <FormInput autoCorrect={false} label="Address" value={address1} onChange={setAddress1} autoCompleteType="street-address" />
            <FormInput autoCorrect={false} label="City" value={city} onChange={setCity} />
            <View style={{
              flexDirection: 'row',
              marginHorizontal: 20,
              marginBottom: 30,
              borderColor: '#9e9',
              padding: 10,
              borderBottomWidth: 3,
              height: 50,
              backgroundColor: 'rgba(255,255,255,.5)'
            }}>
              <Text style={{fontSize: 20, marginRight: 10, fontFamily:'cambay', marginBottom: 0}}>State</Text>
              <Picker
                selectedValue={state}
                style={{height: 25, flexGrow: 1, fontSize: 30, fontFamily:'cambay'}}
                itemStyle={{height: 30, fontSize: 30, fontFamily:'cambay'}}
                onValueChange={(itemValue) => setState(itemValue)}>
                <Picker.Item label="Alabama" value="AL" />
                <Picker.Item label="Alaska" value="AK" />
                <Picker.Item label="American Samoa" value="AS" />
                <Picker.Item label="Arizona" value="AZ" />
                <Picker.Item label="Arkansas" value="AR" />
                <Picker.Item label="California" value="CA" />
                <Picker.Item label="Colorado" value="CO" />
                <Picker.Item label="Connecticut" value="CT" />
                <Picker.Item label="Delaware" value="DE" />
                <Picker.Item label="District Of Columbia" value="DC" />
                <Picker.Item label="Federated States Of Micronesia" value="FM" />
                <Picker.Item label="Florida" value="FL" />
                <Picker.Item label="Georgia" value="GA" />
                <Picker.Item label="Guam" value="GU" />
                <Picker.Item label="Hawaii" value="HI" />
                <Picker.Item label="Idaho" value="ID" />
                <Picker.Item label="Illinois" value="IL" />
                <Picker.Item label="Indiana" value="IN" />
                <Picker.Item label="Iowa" value="IA" />
                <Picker.Item label="Kansas" value="KS" />
                <Picker.Item label="Kentucky" value="KY" />
                <Picker.Item label="Louisiana" value="LA" />
                <Picker.Item label="Maine" value="ME" />
                <Picker.Item label="Marshall Islands" value="MH" />
                <Picker.Item label="Maryland" value="MD" />
                <Picker.Item label="Massachusetts" value="MA" />
                <Picker.Item label="Michigan" value="MI" />
                <Picker.Item label="Minnesota" value="MN" />
                <Picker.Item label="Mississippi" value="MS" />
                <Picker.Item label="Missouri" value="MO" />
                <Picker.Item label="Montana" value="MT" />
                <Picker.Item label="Nebraska" value="NE" />
                <Picker.Item label="Nevada" value="NV" />
                <Picker.Item label="New Hampshire" value="NH" />
                <Picker.Item label="New Jersey" value="NJ" />
                <Picker.Item label="New Mexico" value="NM" />
                <Picker.Item label="New York" value="NY" />
                <Picker.Item label="North Carolina" value="NC" />
                <Picker.Item label="North Dakota" value="ND" />
                <Picker.Item label="Northern Mariana Islands" value="MP" />
                <Picker.Item label="Ohio" value="OH" />
                <Picker.Item label="Oklahoma" value="OK" />
                <Picker.Item label="Oregon" value="OR" />
                <Picker.Item label="Palau" value="PW" />
                <Picker.Item label="Pennsylvania" value="PA" />
                <Picker.Item label="Puerto Rico" value="PR" />
                <Picker.Item label="Rhode Island" value="RI" />
                <Picker.Item label="South Carolina" value="SC" />
                <Picker.Item label="South Dakota" value="SD" />
                <Picker.Item label="Tennessee" value="TN" />
                <Picker.Item label="Texas" value="TX" />
                <Picker.Item label="Utah" value="UT" />
                <Picker.Item label="Vermont" value="VT" />
                <Picker.Item label="Virgin Islands" value="VI" />
                <Picker.Item label="Virginia" value="VA" />
                <Picker.Item label="Washington" value="WA" />
                <Picker.Item label="West Virginia" value="WV" />
                <Picker.Item label="Wisconsin" value="WI" />
                <Picker.Item label="Wyoming" value="WY" />
              </Picker>
            </View>
            <FormInput keyboardType="numeric" autoCorrect={false} label="Zip" value={zip} onChange={setZip} />
          </View>
        }
        { step === 2 &&
        <View>
          <FormInput keyboardType="numeric" autoCorrect={false} label="SSN" value={ssn} onChange={setSsn}  />
          <FormInput keyboardType="number-pad" autoCorrect={false} label="Phone" value={phone} onChange={setPhone} autoCompleteType="tel" />

          <View style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            marginBottom: 30,
            borderColor: '#9e9',
            borderBottomWidth: 3,
            height: 50,
            backgroundColor: 'rgba(255,255,255,.5)',
            padding: 10,
          }}>
            <Text style={{fontSize: 20, marginRight: 10, fontFamily:'cambay', marginBottom: 0}}>DOB</Text>
            <DatePicker 
              date={dob} //initial date from state
              mode="date" //The enum of date, datetime and time
              placeholder="select date"
              format="MM-DD-YYYY"
              maxDate={todayFormatted}
              androidMode="spinner"
              confirmBtnText="Confirm"
              showIcon={false}
              cancelBtnText="Cancel"
              customStyles={{
                dateInput:{
                  borderColor: 'rgba(0,0,0,0)',
                },
                dateText: {fontSize: 25, fontFamily: 'cambay-bold', marginBottom: 10},
              }}
              onDateChange={(date) => {setDob(date)}}
            />
          </View>
        </View>}
      </View>
      <View>
        {step !== 2 &&
        <TouchableOpacity  onPress={() => setStep(step + 1)} >
          <View style={styles.signUpButton}>
            <Text style={styles.buttonText}>Next</Text>
          </View>
        </TouchableOpacity>}
        {step === 2 &&
          <TouchableOpacity  onPress={() => _signUpAsync()} >
            <View style={styles.signUpButton}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        }
        {step !== 0 &&
        <TouchableOpacity  onPress={() => setStep(step - 1)} >
          <View style={styles.previousButton}>
            <Text style={styles.buttonText}>Previous</Text>
          </View>
        </TouchableOpacity>}
      </View>
    </ImageBackground>
  );
}

SignUpScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 40,
  },
  button: {
    marginBottom: 30,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white'
  },
  signUpButton: {
    marginBottom: 30,
    marginHorizontal: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(200,255,200,.95)',
    borderRadius: 3,
  },
  previousButton: {
    marginBottom: 30,
    marginHorizontal: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,.95)',
    borderRadius: 3,
  },
  buttonText: {
    textAlign: 'center',
    padding: 13,
    fontFamily:'cambay-bold',
    fontSize: 20,
    color: '#000'
  }
});
