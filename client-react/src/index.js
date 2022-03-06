import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Navigate,
    Routes as Switch,
} from 'react-router-dom';
import App from './App.jsx';
import Login from './screens/Login.jsx';
import Register from './screens/Register.jsx';
import Activate from './screens/Activate.jsx';
import Private from './screens/Private.jsx';
import Admin from './screens/Admin.jsx';
import Usage from './screens/Usage.jsx';
import Invoices from './screens/Invoices.jsx';
import Documentation from './screens/Documentation.jsx';
import Plan from './screens/Plan.jsx';
import ForgetPassword from './screens/ForgetPassword.jsx';
import ResetPassword from './screens/ResetPassword.jsx';
import PrivateRoute from './Routes/PrivateRoute';
import AdminRoute from './Routes/AdminRoute';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact element={<App />}>
                {/* <Route path = '/plan' element = {<Plan/>}/>
        <Route path = '/usage' element = {<Usage/>}/>
        <Route path = '/documentation' element = {<Documentation/>}/>
        <Route path = '/invoices' element = {<Invoices/>}/> */}
            </Route>
            <Route path='/login' exact element={<Login />} />
            <Route path='/register' exact element={<Register />} />
            <Route
                path='/users/password/forget'
                exact
                element={<ForgetPassword />}
            />
            <Route
                path='/users/password/reset/:token'
                exact
                element={<ResetPassword />}
            />
            <Route path='/users/activate/:token' exact render={<Activate />} />
            <Route path='/private' exact element={<Private />} />
            <Route path='/admin' exact element={<Admin />} />
            <Route render={<Navigate to='/' />} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
