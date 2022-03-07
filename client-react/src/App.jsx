import './App.module.scss';
import React, { useState } from 'react';
import { Route, Routes as Switch, Navigate } from 'react-router-dom';
import { isAuth } from './helpers/auth';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Container';
import RightNavbar from './components/RightNavbar/RightNavbar';
import Dashboard from './screens/Dashboard';
import Usage from './screens/Usage';
import Plan from './screens/Plan';
import Invoices from './screens/Invoices';
import Documentation from './screens/Documentation';

import NavContext from './context/NavContext';
function App() {
    const [nav, setNav] = useState(false);
    const value = { nav, setNav };

    return (
        <div className='App'>
            {isAuth() ? null : <Navigate to='/login' />}
            <NavContext.Provider value={value}>
                <Navbar />
                <Container
                    stickyNav={<RightNavbar />}
                    content={
                        <Switch>
                            <Route exact path='/usage' element={<Usage />} />
                            <Route exact path='/plan' element={<Plan />} />
                            <Route
                                exact
                                path='/documentation'
                                element={<Documentation />}
                            />
                            <Route
                                exact
                                path='/invoices'
                                element={<Invoices />}
                            />
                            <Route exact path='/' element={<Dashboard />} />
                            <Route path='*' element={<main>NOT FOUND</main>} />
                        </Switch>
                    }
                />
            </NavContext.Provider>
        </div>
    );
}

export default App;
