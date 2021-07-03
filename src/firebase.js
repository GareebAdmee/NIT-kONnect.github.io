import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAx3tRHpyfrgs-7cJ30xrfa-QIgpDyciBI",
    authDomain: "qna-site-for-nit-c.firebaseapp.com",
    projectId: "qna-site-for-nit-c",
    storageBucket: "qna-site-for-nit-c.appspot.com",
    messagingSenderId: "148035958263",
    appId: "1:148035958263:web:01bdc0f4d5995a4ce2eaf2",
    measurementId: "G-Z55YM0MC82"
  };

  const firebaseApp = firebase.initializeApp
  (firebaseConfig)
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const db = firebaseApp.firestore()
  export{auth,provider}
  export default db