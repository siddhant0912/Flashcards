import React from 'react'
import {connect} from 'react-redux'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import commomStyles from '../Utils/CommonStyles'
import {textColor, white} from '../Utils/colors'
import {robotoMedium} from '../Utils/fonts'
import CustomStatusBar from './CustomStatusBar'
import {AddDeck} from '../Actions/index'


class Adddeck extends React.Component{
    state={
        title: '',
        inpErr:false,
        uniqNameErr  : false    
    }

    resetState =() =>{
        this.setState({
        title: '',
        inpErr:false,
        uniqNameErr  : false    
        })
    }

    onSubmit =() =>{
        const {AddDeck, goToDecks, decks} = this.props
        const {title} = this.state

        const titleWithoutSpaces = title.replace(/\s/g, '')
        if(!titleWithoutSpaces.length){
            this.setState({
                inpErr:true,
                uniqNameErr:false
            })
            return
        }
        const isuniqueTitle =  Object.keys(decks).some(key =>{
            const deck = decks[key]
            return deck.title === title
        })
        if(isuniqueTitle){
            this.setState({
                inpErr:false,
                uniqNameErr:true
            })
            return
        }
        AddDeck(title)
        goToDecks()
        this.resetState()
    }
    onTitleChange= (value)=>{
        this.setState({
            title :value
        })
    }

    render(){
        return(
            <View style={{flex:1, backgroundColor:'#2B2B2B'}}  >
                <CustomStatusBar/>
                <View style={commomStyles.viewContainer}>
                    <Text style={commomStyles.title}>Add Deck</Text>
                    <Text style={styles.tagline}>Create New Deck</Text>

                    <Text style={styles.label}></Text>
                    <TextInput value={this.state.title} onChangeText={this.onTitleChange} style={commomStyles.textInput}/>

                    {this.state.inpErr && (
                        <Text style={commomStyles.inputErrorText}>Please Enter a Title</Text>
                    )}
                    {this.state.uniqNameErr &&  (
                        <Text style={commomStyles.inputErrorText}>The Title has already been taken</Text>
                    )}
                    <TouchableOpacity onPress={this.onSubmit} style={commomStyles.btnPrimary}>
                        <Text style={commomStyles.btnPrimaryText}>Create Deck</Text>
                    </TouchableOpacity>


                </View>
                
            </View>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Adddeck) 

function mapStateToProps(decks) {
    return {
      decks
    };
  }
  
  function mapDispatchToProps(dispatch, { navigation }) {
  
    return {
      AddDeck: (title) => {
  
        const deckId = title.replace(/\s/g, '');
        const timestamp = Math.round(new Date() / 1000);
        const dateString = new Date().toISOString().split('T')[0];
  
        dispatch(AddDeck({
          id: deckId,
          title: title,
          timestamp: timestamp,
          created: dateString,
          questions: []
        }));
      },
      goToDecks: () => navigation.navigate('Decks')
    };
  
  }


const styles = StyleSheet.create({
    tagline: {
      color: white,
      fontSize: 16
    },
    label:{
      marginTop: 32,
      marginBottom: 4,
      fontSize: 16,
      fontFamily: robotoMedium
    }
  });
  