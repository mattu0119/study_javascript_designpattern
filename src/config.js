const firebaseConfig = {
    apiKey: "AIzaSyBmFJBo8xnuOlk3pCflMi3K47kIYiQIYcE",
    authDomain: "pwatest-a18c7.firebaseapp.com",
    databaseURL: "https://pwatest-a18c7.firebaseio.com",
    projectId: "pwatest-a18c7",
    storageBucket: "pwatest-a18c7.appspot.com",
    messagingSenderId: '936726281196'
};

const functionsConfig = {
    sendMessageStaticURL: 'https://us-central1-pwatest-a18c7.cloudfunctions.net/sendPushMessageStatic'
};

export {
    firebaseConfig,
    functionsConfig,
}