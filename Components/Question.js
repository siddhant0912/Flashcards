import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import commonStyles from '../Utils/CommonStyles'
import {robotoMedium, robotoRegular} from '../Utils/fonts'
import {textColor, white} from '../Utils/colors'

class Question extends React.Component{
    state = {
        showAns : false
    }

    handleShowAnswer = () =>{
        this.setState({showAns: true})
    }

    handleQuestionAnswered = (isCorrectlyAnswered) =>{
        const {onQuestionAnswered} =  this.props

        this.setState({showAns :false})
        onQuestionAnswered(isCorrectlyAnswered)

    }
    render(){
        const {questions} = this.props
        return(
            <View>
              
                <Text style={commonStyles.title}>Question</Text>
                <Text style={styles.largeText}>{questions.question}</Text>
                <ScrollView style={commonStyles.viewContainer}>
                {!this.state.showAns &&(
                    
                    <View>
                        
                        <TouchableOpacity onPress={this.handleShowAnswer} style={commonStyles.btnSecondary}>
                            <Text style={commonStyles.btnSecondaryText}>Show Answer</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {this.state.showAns &&(
                    <View>
                        <Text style={styles.heading}>Answer</Text>
                        <Text style={styles.largeText}>{questions.answer}</Text>
                        <Text style={styles.heading}>Were You correct??</Text>
                        <Text style={styles.smallText}>You got Answer...</Text>

                        <View style={styles.buttonsContainer}>
                            <View style={{flex:1}}>
                                <TouchableOpacity style={styles.btnSuccess} onPress={()=>{this.handleQuestionAnswered(true)}}>
                                    <Text style={styles.btnSuccessText}>Correct</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{flex:1}}>
                                <TouchableOpacity style={styles.btnError} onPress={()=>{this.handleQuestionAnswered(false)}}>
                                    <Text style={styles.btnErrorText}>InCorrect</Text>
                                </TouchableOpacity>
                            </View>


                        </View>

                       
                    </View>
                )}
                </ScrollView>
            </View>
        )
    }

}




const styles = StyleSheet.create({
    largeText: {
      marginTop: 5,
      marginBottom: 20,
      fontSize: 16,
      fontFamily: robotoMedium,
      color: white
    },
    smallText: {
      marginTop: 5,
      marginBottom: 20,
      fontSize: 12,
      fontFamily: robotoRegular,
      color: white
    },
    heading: {
      marginTop: 5,
      fontSize: 22,
      fontFamily: robotoMedium,
      color: white
    },
    btnSuccess: {
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 8,
      height: 50,
      borderRadius: 10,
      backgroundColor: '#28A745'
    },
    btnError: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 8,
      height: 50,
      borderRadius: 10,
      backgroundColor: '#DC3545'
    },
    btnSuccessText: {
      color: white,
      fontSize: 14,
      fontFamily: robotoMedium,
      textTransform: 'uppercase'
    },
    btnErrorText: {
      color: white,
      fontSize: 14,
      fontFamily: robotoMedium,
      textTransform: 'uppercase'
    },
    buttonsContainer: {
      flexDirection: 'row'
    }
  });

  export default Question