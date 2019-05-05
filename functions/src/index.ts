import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const sendMessage = (message:any) => {

    admin.messaging().send(message)
        .then((response: any) => {
            console.log('Successfully sent message:', response);
        }).catch(function(error: any) {
        console.log('Error sending message:', error);
    });

};

export const sendPushMessageStatic = functions.https.onRequest(async (req, res) => {

    await admin.database().ref('/tokens/pwatest').once('value').then((snapshot: any) =>{

        const token:string = snapshot.val().token;

        const message = {
            token: token,
            data: {
                title: 'fcm message title(static)!',
                body: `fcm message body.`,
            },
            webpush: {
                fcm_options: {
                    link: "https://www.yahoo.co.jp"
                }
            }
        };

        // FCMへの通知
        sendMessage(message);

    });

    res.send("send static message");

});

export const sendPushMessageAuto = functions.database.ref('/tokens/pwatest')
    .onWrite(async (change, context) => {

        const token: string = change.after.val().token;

        const message = {
            token: token,
            data: {
                title: 'fcm message title(static)!',
                body: `fcm message body.`,
            },
            webpush: {
                fcm_options: {
                    link: "https://www.yahoo.co.jp"
                }
            }
        };

        // FCMへの通知
        sendMessage(message);

});
