import * as React from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {View, StyleSheet} from 'react-native'
import NavigationService from './Navigation/navigationService'
import { robotoMedium, robotoRegular } from  './Utils/fonts'
import * as Font from 'expo-font'
import reducer from './Reducers'
import { fetchIntialData } from './Utils/api';
import { ReceiveDecks } from './Actions';
import { setLocalNotification } from './Utils/Notifications';
import StackNavigation from './Navigation/StackNavigation';



export default class App extends React.Component {
  store = createStore(reducer)
  state = {
    isDataLoaded : false
  }
  async componentDidMount(){
    const loadDecks = await fetchIntialData()
    console.log(loadDecks)

    setLocalNotification()
    const loadFont =  Font.loadAsync({
      [robotoRegular]: require('./assets/fonts/Roboto-Regular.ttf'),
      [robotoMedium]: require('./assets/fonts/Roboto-Medium.ttf')
    })

    const values = await Promise.all([loadDecks, loadFont])
    const decks = values[0]
    this.store.dispatch(ReceiveDecks(decks))
    this.setState({
      isDataLoaded: true
    })
    
  }

  render(){
    
    return (
      <Provider store={this.store}>
        <View style={styles.appContainer}>
          {this.state.isDataLoaded && (
            <StackNavigation ref={navigatorRef => {
              NavigationService.setToplvlNavigator(navigatorRef)
            }} />
          )
          }
        </View>
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff'
  }
});