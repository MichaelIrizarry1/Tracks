// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackDetailsScreen from './src/screens/TrackDetailsScreen';
import TrackCreate from './src/screens/TrackCreateScreen';
import AccountScreen from './src/screens/AccountScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Provider as AuthProvider} from './src/context/AuthContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const validar = 0;


function TrackListStackScreen() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="TrackList" component={TrackListScreen} />
        <Stack.Screen name="TrackDetails" component={TrackDetailsScreen} />
        
    </Stack.Navigator>
    
  );
} 


function App() {
  if (validar == 0){
    return <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Track" component={TrackListStackScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  }else {
  return <NavigationContainer>
      
      
      <Tab.Navigator>
        <Tab.Screen name="Tracks" component={TrackListStackScreen} />
        <Tab.Screen name="TrackCreate" component={TrackCreate} />
        <Tab.Screen name="Account" component={AccountScreen} />
        
      </Tab.Navigator>

    
  
    

    </NavigationContainer>;}

}

export default () => {
  return (
      <AuthProvider>
        <App/>
      </AuthProvider>



  );



};