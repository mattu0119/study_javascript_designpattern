import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import firebase from 'firebase/app';

firebase.initializeApp({
    apiKey: "AIzaSyBmFJBo8xnuOlk3pCflMi3K47kIYiQIYcE",
    authDomain: "pwatest-a18c7.firebaseapp.com",
    databaseURL: "https://pwatest-a18c7.firebaseio.com",
    projectId: "pwatest-a18c7",
    storageBucket: "pwatest-a18c7.appspot.com",
    messagingSenderId: "936726281196"
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register()