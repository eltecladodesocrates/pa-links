import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from '../components/Header'
import LinksDashboard from '../components/LinksDashboard'
import CreateLink from '../components/CreateLink'
import LoginPage from '../components/LoginPage'
import EditPage from '../components/EditPage'
import EditLink from '../components/EditLink'
import SignupPage from '../components/SignupPage'
import Footer from '../components/Footer'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' component={LoginPage} exact/>
                <Route path='/create' component={CreateLink}/>
                <Route path='/dashboard' component={LinksDashboard}/>
                <Route path='/signup' component={SignupPage} />
                <Route path='/edit' exact component={EditPage} />
                <Route path="/edit/:id" component={EditLink} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter
