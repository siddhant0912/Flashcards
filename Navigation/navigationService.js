import { NavigationActions } from 'react-navigation'

var _navigator

function setToplvlNavigator(navigatorRef) {
    _navigator = navigatorRef

}

function navigate(routeName, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )

}

function goBack() {
    _navigator.dispatch(
        NavigationActions.back()
    )
}

export default {
    navigate,
    goBack,
    setToplvlNavigator
}