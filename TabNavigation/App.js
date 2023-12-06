import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Home,Portfolio,Prices,Settings,Transaction} from './Screens';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle:{
  position: "absolute",
  bottom: 0,
  right: 0,
  left: 0,
  elevation: 0,
  height: 60,
  background: "#fff"
  }
  }
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
         name='Home' 
         component={Home}
         options={
          {tabBarIcon : ({focused})=>{
            return(
              <View style={{alignItems:'center' , justifyContent:'center'}}>
              <Entypo name="home" size={24} color={focused?'red':'green'} />
              <Text style={{fontSize:12 , color:"black"}}>Home</Text>
              </View>
            )
            
          }}
         }
         />
        <Tab.Screen name='Portfolio' 
        component={Portfolio}
        options={
          {tabBarIcon : ({focused})=>{
            return(
              <View style={{alignItems:'center' , justifyContent:'center'}}>
             <FontAwesome5 name="portrait" size={24} color={focused?'red':'green'} />
              <Text style={{fontSize:12 , color:"black"}}>Portfolio</Text>
              </View>
            )
            
          }}
         }
        />
        <Tab.Screen name='Prices' 
        component={Prices}
        options={
          {tabBarIcon : ({focused})=>{
            return(
              <View style={{alignItems:'center' , justifyContent:'center'}}>
             <Entypo name="price-tag" size={24} color={focused?'red':'green'} />
              <Text style={{fontSize:12 , color:"black"}}>Prices</Text>
              </View>
            )
            
          }}
         }
        />
        <Tab.Screen name='Settings'
         component={Settings}
         options={
          {tabBarIcon : ({focused})=>{
            return(
              <View style={{alignItems:'center' , justifyContent:'center'}}>
             <Feather name="settings" size={24} color={focused?'red':'green'} />
              <Text style={{fontSize:12 ,color:"black"}}>Settings</Text>
              </View>
            )
            
          }}
         }
         />
        <Tab.Screen 
        name='Transaction'
         component={Transaction}
         options={
          {tabBarIcon : ({focused})=>{
            return(
              <View style={{alignItems:'center' , justifyContent:'center'}}>
             <AntDesign name="pluscircleo" size={24} color={focused?'red':'green'}/>
              <Text style={{fontSize:12 , color:"black"}}>Transaction</Text>
              </View>
            )
            
          }}
         }
         />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
