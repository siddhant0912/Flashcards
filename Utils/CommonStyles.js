import { StyleSheet } from 'react-native';
import { bgBlue, textColor, textRed, white, orange, black } from './colors';
import { robotoMedium, robotoRegular } from './fonts';

const commonStyles = StyleSheet.create({
    viewContainer: {
        marginLeft: 16,
        marginRight: 16
    },
    title: {
        marginTop: 16,
        fontSize: 40,
        fontFamily: robotoMedium,
        color: white
    },
    btnPrimary: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32,
        height: 50,
        borderRadius: 10,
        backgroundColor: orange
    },
    btnSecondary: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32,
        height: 50,
        borderColor: orange,
        borderWidth: 1,
        borderRadius: 10
    },
    btnPrimaryText: {
        color: white,
        fontSize: 14,
        fontFamily: robotoMedium,
        textTransform: 'uppercase'
    },
    btnSecondaryText: {
        color: white,
        fontSize: 14,
        fontFamily: robotoMedium,
        textTransform: 'uppercase'
    },
    textInput: {
        height: 50,
        borderColor: orange,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: 16,
        fontFamily: robotoRegular,
        color: white
    },
    inputErrorText: {
        marginTop: 4,
        marginBottom: 4,
        color: textRed,
        fontSize: 14,
        fontFamily: robotoMedium,
    }
});

export default commonStyles;