import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from './src/screens/Login/LoginScreen'
import SalesScreen from './src/screens/Sales/SalesScreen'

export default function App () {
  return <AppContainer />
}

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: '#2FB3B4'
  }
}

const AppNavigator = createStackNavigator({
  LoginScreen: { screen: LoginScreen },
  SalesScreen: { screen: SalesScreen }
},
{
  defaultNavigationOptions: defaultNavOptions
})

const AppContainer = createAppContainer(AppNavigator)
