import { ADD_CARD, ADD_DECK, RECEIVE_DECKS, REMOVE_DECK } from '../Actions/index'


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
                decks : state.decks.concat(action.deck)
            }
        case REMOVE_DECK:
            return {
                ...state,
                decks : state.decks.filter(deck => deck.id !== action.deckId)
            }  
        case ADD_CARD:
            return {
                ...state, 
                decks :state.decks.map(deck => deck.id === action.quescard.deckId ?  {
                        ...deck,
                        questions: deck.questions.concat({
                            question: action.quescard.question,
                            answer: action.quescard.answer
                        })
                } : deck)
            }
            
        default:
            return {
                ...state
            }
    }
}

export default decks