import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch , Router } from 'react-router-dom';
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
      <Route path='/' exact render={props => <App {...props} />}>
        {/* <Route path = '/plan' element = {<Plan/>}/>
        <Route path = '/usage' element = {<Usage/>}/>
        <Route path = '/documentation' element = {<Documentation/>}/>
        <Route path = '/invoices' element = {<Invoices/>}/> */}
      </Route>
      <Route path='/login' exact render={props => <Login {...props} />} />
      <Route path='/register' exact render={props => <Register {...props} />} />
      <Route path='/users/password/forget' exact render={props => <ForgetPassword {...props} />} />
      <Route path='/users/password/reset/:token' exact render={props => <ResetPassword {...props} />} />
      <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
      <PrivateRoute path="/private" exact component={Private} />
       <AdminRoute path="/admin" exact component={Admin} />
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);