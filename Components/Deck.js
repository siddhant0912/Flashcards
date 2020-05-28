import React from 'react'
import {connect} from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import commonStyles from '../Utils/CommonStyles'
import navigationService from '../Navigation/navigationService'
import DeckCard from './DeckCard'

class Deck extends React.Component{
    state= {
        NoQueErr : false
    }
    handleStartQuiz = () =>{
        const {deck ,quesCnt} = this.props
        if(quesCnt ===0 ){
            this.setState({
                NoQueErr: true
            })
        }else{
            navigationService.navigate('Quiz', {
                deckId: deck.id
            })
        }

    }
    handleAddCard = () =>{
        const {deck} = this.props
        this.setState({
            NoQueErr: false
        })
        navigationService.navigate('AddCard',{
            deckId :deck.id
        })

    }
    render(){
        const {deck} = this.props
        const {NoQueErr} = this.state
        return(
            <View style={[commonStyles.viewContainer, {marginTop:8}]}>
                <DeckCard deck={deck} allowNavigation= {false}/>
                <Text style={commonStyles.title}>Deck</Text>
                <TouchableOpacity onPress={this.handleAddCard} style={commonStyles.btnSecondary}>
                        <Text style={commonStyles.btnSecondaryText}>Add Card</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.handleStartQuiz} style={commonStyles.btnPrimary}>
                    <Text style={commonStyles.btnPrimaryText}>Take a Quiz</Text>
                </TouchableOpacity>

                {NoQueErr &&(
                    <Text style={commonStyles.inputErrorText}>Not Enough Cards!! Add more cards</Text>
                )}
            </View>
        )
    }
}

function mapStateToProps(decks, { navigation }){
    const {deckId} = navigation.state.params
    return{
        deckId,
        deck: decks[deckId],
        quesCnt : decks[deckId].questions.length
    }
}
export default connect(mapStateToProps)(Deck)