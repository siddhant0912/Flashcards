import { createStackNavigator, createAppContainer } from 'react-navigation';

import TabNavigation from './TabNavigation';
import Decks from '../Components/Decks';
import Deck from '../Components/Deck';
import Adddeck from '../Components/AddDeck';
import Addcard from '../Components/AddCard';
import Quiz from '../Components/Quiz';

const StackNavigator = createStackNavigator({
    Primary: {
        screen: TabNavigation,
        navigationOptions: {
            header: null

        }
    },
    Decks: {
        screen: Decks,

    },
    Deck: {
        screen: Deck,
    },
    AddDeck: {
        screen: Adddeck,

    },
    AddCard: {
        screen: Addcard,
        navigationOptions: {
            title: 'Add Card',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#2B2B2B' }

        }
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            title: 'Quiz',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#2B2B2B' }

        }
    }
});

const StackNavigation = createAppContainer(StackNavigator);

export default StackNavigation;