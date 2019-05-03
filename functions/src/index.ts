import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


export const sendTestMsgNotification = functions.database.ref('/tokens/pwatest')
    .onWrite(async (change, context) => {

     // 必要な値をDatabaseから取得
     const token = 'testToken';


     // FCMへ通知実施

        // 通知のJson.
        const payload = {
            notification: {
                title: 'fcm message title!',
                body: `fcm message body.`,
            }
        };

        // https://firebase.google.com/docs/cloud-messaging/admin/legacy-fcm?hl=ja
        admin.messaging().sendToDevice(token, payload)
            .then((response: any) => {
                console.log('Successfully sent message:', response);
            }).catch(function(error: any) {
            console.log('Error sending message:', error);
        });

});
