import React from 'react'
import {connect} from 'react-redux'
import {View} from 'react-native'
import commonStyles from '../Utils/CommonStyles'
import {clearLocalNotification, setLocalNotification} from '../Utils/Notifications'

import CustomStatusBar from '../Components/CustomStatusBar'
import QuizHeader from '../Components/QuizHeader'
import QuizResults from '../Components/QuizResults'
import Question from '../Components/Question'

class Quiz extends React.Component{
    state ={
        currentQuestion : 0,
        answeredCorrectly : 0,
        quizComplete : false
    }

    handleQuestionAnswered = async (answeredCorrectly) =>{
        if(answeredCorrectly){
            this.setState({answeredCorrectly : this.state.answeredCorrectly+1})
        }

        const isQuizComplete =  this.state.currentQuestion === this.props.questions.length - 1

        if(isQuizComplete){
            this.setState({quizComplete: true})
            await clearLocalNotification()
            await setLocalNotification()
        }else{
            this.setState({currentQuestion : this.state.currentQuestion + 1})
        }
    }
    handleStartQuizAgain = () =>{
        this.setState({
            currentQuestion :0,
            answeredCorrectly :0,
            quizComplete :false
        })
    }
    render(){
        const {questions} = this.props
        const {currentQuestion, answeredCorrectly, quizComplete} =this.state
        const currQues = questions[currentQuestion]
        return(
            <View style={{flex:1, backgroundColor: '#2B2B2B'}}>
                <CustomStatusBar/>
                <View style={commonStyles.viewContainer}> 

                <QuizHeader currentQuestion ={currentQuestion} totalQues={questions.length}/>

                {quizComplete ? <QuizResults totalQues={questions.length} StartQuizAgain= {this.handleStartQuizAgain} CorrectlyAnswered={answeredCorrectly}/>
                                : <Question  questions={currQues} onQuestionAnswered={this.handleQuestionAnswered}/>}

                </View>
            </View>
        )
    }
}

function mapStateToProps({decks}, { navigation }){
    const {deckId} = navigation.state.params

    return{
        deckId,
        questions :decks.filter(deck => deck.id ==deckId)[0].questions
    }
}
export default connect(mapStateToProps)(Quiz)