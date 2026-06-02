import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import CourseProvider from "./context/CourseContext"
import AuthProvider from "./context/AuthContext"
import "./style.css";
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <AuthProvider>
      <CourseProvider>
        <App />
      </CourseProvider>
    </AuthProvider>
    </BrowserRouter>
 
)