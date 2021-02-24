import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyACSlLUfjKAPN0eBBvIK7N8qmbbthc08WU",
  authDomain: "netflix-clone-c38bc.firebaseapp.com",
  projectId: "netflix-clone-c38bc",
  storageBucket: "netflix-clone-c38bc.appspot.com",
  messagingSenderId: "144260089115",
  appId: "1:144260089115:web:fa6f8067d7892010593fbe",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
