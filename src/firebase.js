//!Para copiar esto vamos a FireBase > nuestro proyecto > configuración del proyecto
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//!importar para poder acceder al almacenamiento de firebase
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTftscnl2TYBV16z-eXgH36t0OV32Pj0k",
  authDomain: "uploadingfile-2c53f.firebaseapp.com",
  projectId: "uploadingfile-2c53f",
  storageBucket: "uploadingfile-2c53f.appspot.com",
  messagingSenderId: "789281848153",
  appId: "1:789281848153:web:ecf098950b9147042baa48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//!Exportacion necesaria para usar el firebase
export const storage = getStorage(app)