import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import Tasks from './src/toolsscreen/Tasks';
import Settings from './src/toolsscreen/Settings';
import Plan from './src/toolsscreen/Plan';
import { Ionicons } from '@expo/vector-icons';
//import strings from './src/localization/localized.js';



export default createMaterialTopTabNavigator(
  {
    Tasks: { screen: Tasks },
    Plan: { screen: Plan },
    Settings: { screen: Settings },
    Setting2: { screen: Settings },
    Setting3: { screen: Settings },
    Setting4: { screen: Settings },
    Setting5: { screen: Settings },
    Setting6: { screen: Settings, tabBarOptions: { label: 'aaa' } },
  },



  {
    navigationOptions: ({ navigation }) => (

      {
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Tasks') {
            iconName = `ios-list${focused ? '' : '-outline'}`;
          }
          else if (routeName === 'Plan') {
            iconName = `ios-refresh-circle${focused ? '' : '-outline'}`;
          }
          else if (routeName === 'Settings') {
            iconName = `ios-options${focused ? '' : '-outline'}`;
          }
          else {
            iconName = `ios-options${focused ? '' : '-outline'}`;
          }


          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
        },
      }),
    tabBarOptions:
    {
      showIcon: true,
      showLabel: false,
      scrollEnabled: true,
      activeTintColor: 'royalblue',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: 'black',
      },
      indicatorStyle: { backgroundColor: 'royalblue', },
      tabStyle: { width: 100 },
    },
    tabBarPosition: 'bottom',
  }
);


const styles = StyleSheet.create({
  theme2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  theme1: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

