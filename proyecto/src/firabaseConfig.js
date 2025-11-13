import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
apiKey: "AIzaSyBGNZ-rtRgG7g2tLreZLUTbSaLo4g8q-Dw",
authDomain: "pokeapi-1bb5e.firebaseapp.com",
projectId: "pokeapi-1bb5e",
storageBucket: "pokeapi-1bb5e.firebasestorage.app",
messagingSenderId: "547517435974",
appId: "1:547517435974:web:ee6916675739b492a1ba47"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app); // ✅ ¡Esto es necesario!
export { auth, db };