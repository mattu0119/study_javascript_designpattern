import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const sendMessage = (token:string, payload: any) => {

    // https://firebase.google.com/docs/cloud-messaging/admin/legacy-fcm?hl=ja
    admin.messaging().sendToDevice(token, payload)
        .then((response: any) => {
            console.log('Successfully sent message:', response);
        }).catch(function(error: any) {
        console.log('Error sending message:', error);
    });

};

export const sendPushMessageStatic = functions.https.onRequest(async (req, res) => {

    await admin.database().ref('/tokens/pwatest').once('value').then((snapshot: any) =>{

        const token:string = snapshot.val().token;

        const payload = {
            notification: {
                title: 'fcm message title(static)!',
                body: `fcm message body.`,
            }
        };

        // FCMへの通知
        sendMessage(token,payload);

    });

    res.send("send static message");

});

export const sendPushMessageAuto = functions.database.ref('/tokens/pwatest')
    .onWrite(async (change, context) => {

        const token: string = change.after.val().token;

        // 通知のJson.
        const payload = {
            notification: {
                title: 'fcm message title(auto)!',
                body: `fcm message body.`,
            }
        };

        // FCMへの通知
        sendMessage(token,payload);

});
