import React from 'react'
import {connect} from 'react-redux'
import { View, Text,ScrollView } from 'react-native'
import CustomStatusBar from './CustomStatusBar'
import HomeHeader from './HomeHeader'
import DeckCard from './DeckCard'
import commonStyles from '../Utils/CommonStyles'

class Decks extends React.Component{
    render(){
        const { decksArray } = this.props;
        return(
            <View style={{flex: 1, backgroundColor:'#2B2B2B'}}>
               <CustomStatusBar/>
               <ScrollView style={commonStyles.viewContainer} scrollEnabled={true} showsVerticalScrollIndicator={false}> 
               <HomeHeader/>

               {decksArray.length === 1 
               ? <Text style={commonStyles.title}> Deck</Text>
               : <Text style={[commonStyles.title ]}>{decksArray.length} Decks</Text>
            }
                {decksArray.map(deck => (
              <DeckCard deck={deck} allowNavigation={true} key={deck.id} />
                 ))}
               

               </ScrollView>
               
            </View>
        )
    }
}

function mapStateToProps({decks}) {
  return {
      decksArray: decks
  }
  
  }
  
export default connect(mapStateToProps)(Decks)