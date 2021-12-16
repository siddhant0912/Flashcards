import React from 'react'
import {connect} from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import commonStyles from '../Utils/CommonStyles'
import navigationService from '../Navigation/navigationService'
import DeckCard from './DeckCard'
import CustomStatusBar from './CustomStatusBar'
import { MaterialIcons } from '@expo/vector-icons';
import { RemoveDeck } from '../Actions'
class Deck extends React.Component{
    constructor(props){
        super(props)
    }
    state= {
        NoQueErr : false
    }
    componentDidMount(){
        this.props.navigation.setParams({
            onDeletePress: () =>this.deleteDeck()
        })
    }
    static navigationOptions = ({ navigation }) => {
		return{
            title: 'Deck',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#2B2B2B' },
            headerRight : <TouchableOpacity onPress={navigation.getParam('onDeletePress')} style={{paddingRight:15}}>
                    <MaterialIcons name = "delete"
                        size = { 30 }
                        color = 'red'
                />
            </TouchableOpacity> 

        }
	}
    deleteDeck =() =>{
        console.log('delete Deck here',this.props)
        this.props.deleteDeck()
        //this.props.goToDecks()
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
        if(deck == undefined || deck == null){
            this.props.navigation.navigate('Decks')
            return <View style={{flex:1, backgroundColor:'#2B2B2B'}}>
                    <CustomStatusBar/>
                        <Text style={commonStyles.title}>Card Does not exist</Text>
                    </View>
        }
        console.log('Decl',deck)
        return(
            <View style={{flex:1, backgroundColor:'#2B2B2B'}}>
            <CustomStatusBar/>
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
            </View>
        )
    }
}

function mapStateToProps({decks}, { navigation }){
    console.log(decks)
    const {deckId} = navigation.state.params
    const currentDeck = decks.filter(deck => deck.id == deckId)
    return{
        deckId,
        deck: currentDeck[0],
        quesCnt : currentDeck.length > 0  ? currentDeck[0].questions.length : []
    }
}
function mapDispatchToProps(dispatch, { navigation }) {
  
    return {
      deleteDeck: () => {
        const deckId = navigation.state.params.deckId
        dispatch(RemoveDeck(deckId));
      }
    };
  
  }
export default connect(mapStateToProps,mapDispatchToProps)(Deck)