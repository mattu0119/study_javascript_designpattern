import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import firebase from 'firebase/app';

firebase.initializeApp({
    apiKey: "AIzaSyABtiMlJJaR2MHyEJ9E81u352BZZNdULOw",
    authDomain: "tkameyamagcp001.firebaseapp.com",
    databaseURL: "https://tkameyamagcp001.firebaseio.com",
    projectId: "tkameyamagcp001",
    storageBucket: "tkameyamagcp001.appspot.com",
    messagingSenderId: "377979390714"
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register()