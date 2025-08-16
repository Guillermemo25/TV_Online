// ✅ Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyAFLwKrplfCUQ4CEOPECEsvz3l9wCcu1LQ",
    authDomain: "memorias-familia.firebaseapp.com",
    projectId: "memorias-familia",
    storageBucket: "memorias-familia.appspot.com",
    messagingSenderId: "1031674093779",
    appId: "1:1031674093779:web:a5767556435cf15e763426"
};

// ✅ Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();