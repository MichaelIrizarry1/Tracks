import React, {useState,useContext}from 'react';

import { View} from 'react-native';
import { Button, Input,Text} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';

function SigninScreen({navigation}) {
  const {state,SignUp} = useContext(AuthContext);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
    return (
      <View style={{ margin:30 }}>
        <Text h3 style={{ margin:30 }} >Signin</Text>
        <Input 
          label = "Email"
          value = {email}
          onChangeText = {setEmail}
          autoCapitalize = "none"
          autoCorrect = {false}
        
        />
        <Input 
          secureTextEntry
          label = "Password"
          value = {password}
          onChangeText = {setPassword}
          autoCapitalize = "none"
          autoCorrect = {false}
          
          
          />
        <Button
        title="Go to Details"
        onPress={() => SignUp({email,password})}
      />
      </View>
    );
  }


  export default SigninScreen;