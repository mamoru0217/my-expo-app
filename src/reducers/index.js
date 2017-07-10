/* @flow */
import { combineReducers } from 'redux'
import stories from './stories'
import mainTab from './mainTab'
import newsStack from './newsStack'

export default combineReducers({
  stories,
  nav: combineReducers({
    mainTab,
    newsStack
  })
})
