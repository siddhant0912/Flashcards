import React from 'react'
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native'
import commonStyles from '../Utils/CommonStyles'
import {robotoMedium} from '../Utils/fonts'
import { white} from '../Utils/colors'
import navigationService from '../Navigation/navigationService'

function QuizResults(props){
    const { totalQues, CorrectlyAnswered, StartQuizAgain} = props
    const per = Math.round((100/totalQues) * CorrectlyAnswered)

    return(
        <View>
            <Text style={commonStyles.title}>Quiz Completed !</Text>
            <Text style={styles.largeText}>You got {CorrectlyAnswered} out of {totalQues} correct.</Text>
            <Text style={styles.largeText}>You Scored {per} %</Text>

            <TouchableOpacity onPress={StartQuizAgain} style={commonStyles.btnSecondary}>
                <Text style={commonStyles.btnSecondaryText}>Start Quiz Again</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigationService.goBack} style={commonStyles.btnSecondary}>
                <Text style={commonStyles.btnSecondaryText} >Return To Deck</Text>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    largeText: {
      marginTop: 8,
      marginBottom: 20,
      fontSize: 20,
      fontFamily: robotoMedium,
      color: white
    }
  });

export default QuizResults