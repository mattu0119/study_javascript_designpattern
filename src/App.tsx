import React from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from 'firebase/app';
import "firebase/messaging";

const App: React.FC = () => {

  const messaging = firebase.messaging();

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
    messaging.getToken().then(function(currentToken) {
      if (currentToken) {
        console.log('トークンにゃ : '+ currentToken);//フキダシにトークンを表示。functionはmain.jsに定義。
      } else {
        // Show permission request.
        console.log('No Instance ID token available. Request permission to generate one.');
        // Show permission UI.
        // updateUIForPushPermissionRequired();
        // setTokenSentToServer(false);
      }
    }).catch(function(err) {
      console.log('An error occurred while retrieving token. ', err);
      // showToken('Error retrieving Instance ID token. ', err);
      // setTokenSentToServer(false);
    });
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

      </header>
    </div>
  );

};

export default App;
