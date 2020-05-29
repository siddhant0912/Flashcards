import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { bgBlue, white, black, orange } from '../Utils/colors';
import { robotoRegular } from '../Utils/fonts';

import Decks from '../Components/Decks';
import AddDeck from '../Components/AddDeck';

const TabNavigator = createBottomTabNavigator({
    Decks: {
        screen: Decks,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: () => < MaterialCommunityIcons name = "cards-outline"
            size = { 30 }
            color = { orange }
            />
        }
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: 'Add Deck',
            tabBarIcon: () => < MaterialIcons name = "add"
            size = { 30 }
            color = { orange }
            />
        }
    }
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? bgBlue : orange,
        style: {
            height: 56,
            backgroundColor: Platform.OS === 'ios' ? '#FAFAFA' : black,
            fontFamily: robotoRegular,
            shadowColor: 'rgba(0,0,0,0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        },
        labelStyle: {
            fontSize: 13
        }
    }
});

const TabNavigation = createAppContainer(TabNavigator);

export default TabNavigation;