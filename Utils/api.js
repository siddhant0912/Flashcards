import { AsyncStorage } from 'react-native'
export const DECKS_STORAGE_KEY = 'MobileFlashcards:Decks';
//import * as fs from 'fs'

const dummyData = {
    decks : [
        {
        id: 'JavaScript',
        title: 'Javascript',
        timestamp: new Date().getTime(),
        created: '2020-05-27',
        questions: [{
                question: 'Which is full from of ES in Javascript',
                answer: 'ECMA Script'
            },
            {
                question: 'Which keyword is used to get datatype of variable',
                answer: 'typeOf'
            },
            {
                question: 'Who is creator of Javascript?',
                answer: 'Brendon Eich'
            },
            {
                question: 'Which array method creates a new array with all elements that pass the test implemented by the provided function.',
                answer: 'Filter'
            }
        ]
    },
    {
        id: 'React',
        title: 'React',
        timestamp: new Date().getTime(),
        created: '2020-05-27',
        questions: [{
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            },
            {
                question: 'Name the best resource to learn React',
                answer: 'Udacity React Nanodegree Program'
            }
        ]
    }
    ]
}

export async function fetchIntialData() {

    let deck = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
    if (deck !== null) {
        return JSON.parse(deck)
    } else {
        await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData))
        return dummyData
    }
}