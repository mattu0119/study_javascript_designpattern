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

});
