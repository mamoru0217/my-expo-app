/* @flow */
/* eslint-disable react/display-name*/
import React from 'react'
import { connect } from 'react-redux'
import { TabNavigator, addNavigationHelpers } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MainStack from './MainStack'
import SettingsStack from './SettingsStack'

// export default TabNavigator(
export const MainTab = TabNavigator(
  {
    Main: {
      screen: MainStack,
      path: '/',
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }: any) =>
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
      }
    },
    Settings: {
      screen: SettingsStack,
      path: '/settings',
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor, focused }: any) =>
          <Ionicons
            name={focused ? 'ios-settings' : 'ios-settings-outline'}
            size={26}
            style={{ color: tintColor }}
          />
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false
  }
)

export default connect(state => ({
  nav: state.mainTab
}))(function MainTabWithNavigation(props: any) {
  return (
    <MainTab
      navigation={addNavigationHelpers({
        dispatch: props.dispatch,
        state: props.nav
      })}
    />
  )
})
