import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSgDW4RDfKrM1GX266gc6QZaANUn9OAfU",
  authDomain: "qinqela-coffeshop.firebaseapp.com",
  projectId: "qinqela-coffeshop",
  storageBucket: "qinqela-coffeshop.appspot.com",
  messagingSenderId: "331121810122",
  appId: "1:331121810122:web:abfee92b3586c2f5b33233"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App className='body'/>
    </BrowserRouter>
  </React.StrictMode>,
)
