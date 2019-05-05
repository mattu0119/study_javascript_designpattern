import React from 'react';
import logo from './logo.svg';
import './App.css';
import {functionsConfig} from './config'

import firebase from 'firebase/app';
import "firebase/messaging";
import "firebase/database";

import "whatwg-fetch";

const App: React.FC = () => {

  const messaging = firebase.messaging();

  // Handle incoming messages. Called when:
  // - a message is received while the app has focus
  // - the user clicks on an app notification created by a service worker
  //   `messaging.setBackgroundMessageHandler` handler.
  // messaging.onMessage(async function(payload) {
  //   console.log('Message received. ', payload);
  //   const notificationTitle = `focus:${payload.data.title}`;
  //   const notificationOptions = {
  //     body: payload.data.body,
  //     // icon: '/firebase-logo.png'
  //   };
  //
  //   console.log(notificationTitle, notificationOptions)
  //
  //   // await ServiceWorkerRegistration.prototype.showNotification(
  //   //     notificationTitle,
  //   //     notificationOptions);
  //
  //   return;
  //
  //   // return new Notification(
  //   //     notificationTitle,
  //   //     notificationOptions);
  //
  // });

  const requestPermission = () => {
    //プッシュ通知の許可をする処理
    console.log('Requesting permission...');
    // [START request_permission]
    messaging.requestPermission().then(function() {
      console.log('Notification permission granted.');
      // TODO(developer): Retrieve an Instance ID token for use with FCM.
      // [START_EXCLUDE]
      // In many cases once an app has been granted notification permission, it
      // should update its UI reflecting this.
      viewToken();
      // [END_EXCLUDE]
    }).catch(function(err) {
      console.log('Unable to get permission to notify.', err);
    });
    // [END request_permission]
  };

  const viewToken = () => {
    messaging.getToken().then(function(currentToken: any) {
      if (currentToken) {
        console.log('トークンにゃ : '+ currentToken);//フキダシにトークンを表示。functionはmain.jsに定義。
        saveToken(currentToken);
      } else {
        // Show permission request.
        console.log('No Instance ID token available. Request permission to generate one.');
        // Show permission UI.
        // updateUIForPushPermissionRequired();
        // setTokenSentToServer(false);
      }
    }).catch(function(err: any) {
      console.log('An error occurred while retrieving token. ', err);
      // showToken('Error retrieving Instance ID token. ', err);
      // setTokenSentToServer(false);
    });
  };

  const saveToken = (token: any): void =>{
    firebase.database().ref(`tokens/pwatest`).set({
      username: "testuser",
      token: token,
    });
  };

  const sendMessage = (): void =>{

    fetch(functionsConfig.sendMessageStaticURL)
        .then(res => res.text())
        .then(body => console.log(body));

  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <input type="button" onClick={requestPermission} value="許可する" />
        <input type="button" onClick={sendMessage} value="メッセージの送信" />

      </header>
    </div>
  );

};

export default App;
