import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { AuthState } from './context/Auth/authState';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthState>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AuthState>
 
);


