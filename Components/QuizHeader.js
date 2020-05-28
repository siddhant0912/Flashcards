import React from 'react'
import {StyleSheet, Text, View , Image} from 'react-native'
import {white,  bgBlueLight} from '../Utils/colors'
import {robotoMedium} from '../Utils/fonts'

export default function QuizHeader(props){
    return(
        <View style={styles.headerPanel}>
            <Text style={styles.headerTextContainer}>Quiz Time!</Text>
            <Text style={styles.countText}>{props.currentQuestion + 1}/ {props.totalQues}</Text>

            <View style={styles.imageContainer}>
                <Image source= {require('../images/cards-quiz.png')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerPanel: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 16,
      paddingRight: 16,
      height: 130,
      borderRadius: 10,
      backgroundColor: bgBlueLight
    },
    headerTextContainer: {
      flex: 1,
      flexDirection: 'column' 
    },
    headerText: {
      color: white,
      fontFamily: robotoMedium,
      fontSize: 32
    },
    countText: {
      marginTop: 24,
      fontSize: 26,
      fontFamily: robotoMedium,
      color: white
    },
    imageContainer: {
      flex: 1,
      alignItems: 'flex-end'
    }
  });