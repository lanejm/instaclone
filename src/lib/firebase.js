import { seedDatabase } from "../seed";

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: ''
};

const firebase = window.firebase.initializeApp(firebaseConfig);
const { FieldValue } = window.firebase.firestore;

seedDatabase(firebase);

export { firebase, FieldValue };
