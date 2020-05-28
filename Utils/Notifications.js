import { Notifications } from 'expo'
import { AsyncStorage } from 'react-native'
import * as Permissions from 'expo-permissions'


const NOTIFICATION_KEY = 'FlashCards:Notification'

export async function clearLocalNotification() {

    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
        .catch(e => console.log(e))

}

export function createNoti() {
    return {
        title: 'Answer a Quiz',
        body: '⏰ Don\`t forget to complete a quiz today',
        ios: {
            sound: true
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        }
    }
}

export async function setLocalNotification() {
    const dataJSON = await AsyncStorage.getItem(NOTIFICATION_KEY)
    const data = JSON.parse(dataJSON)
    alert(data)


    if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
                if (status === 'granted') {
                    Notifications.cancelAllScheduledNotificationsAsync()
                    const tomm = getNotiTommorrow()
                    Notifications.scheduleLocalNotificationAsync(createNoti(), {
                        time: tomm,
                        repeat: 'day'
                    })
                }
            })
        AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
    }
}



function getNotiTommorrow() {
    let tomm = new Date()
    tomm.setDate(tomm.getDate() + 1)
    tomm.setHours(20)
    tomm.setMinutes(0)
    tomm.setSeconds(0)

    return tomm
}