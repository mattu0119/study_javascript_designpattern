import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const sendTestMsgNotification = functions.database.ref('/tokens/pwatest')
    .onWrite(async (change, context) => {

        const token: string = change.after.val().token;

        // 通知のJson.
        const payload = {
            notification: {
                title: 'fcm message title!',
                body: `fcm message body.`,
            }
        };

        // FCMへの通知
        // https://firebase.google.com/docs/cloud-messaging/admin/legacy-fcm?hl=ja
        admin.messaging().sendToDevice(token, payload)
            .then((response: any) => {
                console.log('Successfully sent message:', response);
            }).catch(function(error: any) {
            console.log('Error sending message:', error);
        });

});
