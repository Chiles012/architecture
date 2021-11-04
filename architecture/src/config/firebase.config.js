import firebase from 'firebase/compat';
import env from 'react-dotenv'

/**
 * * Credenciales de firebase
 * * Crear un archivo .env en la ruta del proyecto donde guardes dichas configuraciones
 */
const firebaseConfig = {
    apiKey: env.API_KEY,
    authDomain: env.AUTH_DOMAIN,
    projectId: env.PROJECT_ID,
    storageBucket: env.STORAGE_BUCKET,
    messagingSenderId: env.MESSAGING,
    appId: env.APP_ID,
    measurementId: env.MEASUREMENT_ID
}

export default firebase.initializeApp(firebaseConfig);
