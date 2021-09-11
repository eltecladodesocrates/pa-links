import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CreateLink from './components/CreateLink'
import AppRouter from './router/AppRouter'
import LinksContextComponent from './context/links'
import AuthContextProvider from './context/auth'


ReactDOM.render(
    <AuthContextProvider>
        <LinksContextComponent>
            <AppRouter />
        </LinksContextComponent>
    </AuthContextProvider>

,document.getElementById('root'))
