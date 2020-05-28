import { ADD_CARD, ADD_DECK, RECEIVE_DECKS } from '../Actions/index'


function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            return {
                ...state,
                [action.deck.id]: action.deck
            }

        case ADD_CARD:
            return {
                ...state,
                [action.quescard.deckId]: {
                    ...state[action.quescard.deckId],
                    questions: state[action.quescard.deckId].questions.concat({
                        question: action.quescard.question,
                        answer: action.quescard.answer
                    })
                }
            }
        default:
            return {
                ...state
            }
    }
}

export default decks