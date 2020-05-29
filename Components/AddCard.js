import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'
import {AddCard} from '../Actions/index'
import commonStyles from '../Utils/CommonStyles'
import {textColor, white} from '../Utils/colors'
import {robotoMedium} from '../Utils/fonts'

class Addcard extends React.Component{
    state ={
        question : '',
        answer : '',
        isQuestionErr : false,
        isAnswerEmptyErr : false
    }
    resetState = () =>{
        this.setState({
            question : '',
            answer : '',
            isAnswerEmptyErr :false,
            isQuestionErr : false
        })
    }

    onSubmit = () =>{
        const {AddCard, goBack} =  this.props
        const {question, answer} = this.state
        console.log('this ran')

        const questionWithNoSpace = question.replace(/\s/g, '')
        const answerWithNoSpace = answer.replace(/\s/g, '')

        var isValiFailed = false

        if(!questionWithNoSpace.length){
            this.setState({
                isQuestionErr : true
            })
        }else{
            this.setState({ isQuestionErr : false})
        }

        if(!answerWithNoSpace.length){
            this.setState({ isAnswerEmptyErr :true })
            isValiFailed = true
        }else{
            this.setState({ isAnswerEmptyErr: false })
        }
        if(isValiFailed){
            console.log('failed')
            return
        }
        AddCard(question, answer)
        goBack()
        this.resetState()
        
    }
    onQuestionChange= (value) =>{
        this.setState({ question : value})

    }

    onAnswerChange = ( value) =>{
        this.setState({answer : value})
    }
    render(){
        return(
            <View style={{flex: 1,  backgroundColor:'#2B2B2B'}}>
              <View style={commonStyles.viewContainer}>
                  <Text style={commonStyles.title}>Add Card</Text>
                  <Text style={styles.tagline}>Add a new Card to deck</Text>
                  
                  <Text style={styles.label}>Your Questions</Text>
                  <TextInput style={commonStyles.textInput} value={this.state.question} onChangeText={this.onQuestionChange}/> 
                  {this.state.isQuestionErr && (
                      <Text style={commonStyles.inputErrorText}>Please Enter Your Question</Text>
                  )}
                  <Text style={styles.label}>The Answer</Text>
                  <TextInput value={this.state.answer} onChangeText={this.onAnswerChange} style={commonStyles.textInput}/>
                  {this.state.isAnswerEmptyErr &&(
                      <Text style={commonStyles.inputErrorText}>Please Enter the Answer</Text>
                  )}

                  <TouchableOpacity onPress={this.onSubmit} style={commonStyles.btnPrimary}>
                        <Text style={commonStyles.btnPrimaryText}>Add Card</Text>
                  </TouchableOpacity>
              </View>
            </View>
        )
    }
}

function mapDispatchToProps(dispatch, { navigation }){
    return{
        AddCard : (question, answer) => {
            const { deckId } =  navigation.state.params
            const quescard = {
                deckId,
                question,
                answer
            }
            dispatch(AddCard(quescard))
        },
        goBack: () => navigation.goBack()
    }

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
      fontFamily: robotoMedium,
      color: white
    }
  });


export default connect(null, mapDispatchToProps)(Addcard)