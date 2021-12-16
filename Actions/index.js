export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const REMOVE_DECK = 'REMOVE_DECK'

export function ReceiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export function AddDeck(deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

export function AddCard(quescard) {
    return {
        type: ADD_CARD,
        quescard
    }
}

export function RemoveDeck(deckId){
    return {
        type:REMOVE_DECK,
        deckId
    }
}