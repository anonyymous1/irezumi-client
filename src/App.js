// Imports
import React, { useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken' 
// CSS
import './App.css';
// Components
import Welcome from './components/Welcome'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Profile from './components/Profile'
import ProfileEdit from './components/ProfileEdit'
import Signup from './components/Signup'
import Login from './components/Login'
import About from './components/About'
import ImageSearch from './components/ImageSearch'
import TattooShop from './components//TattooShop'
import NotFoundPage from './components/NotFoundPage'
import Favorites from './components/Favorites'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem('jwtToken');
  return <Route {...rest} render={(props)=>{
    return user ? <Component { ...rest } { ...props }/> : <Redirect to="/login"/>
  }}/>
}

function App() {
  //Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    let token;

    //If there is no token in localStorage then the user is not authenticated
    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'))
      setAuthToken(localStorage.jwtToken);
      setCurrentUser(token)
    }
  }, [])
    
  const nowCurrentUser = (userData) => {
    console.log('nowCurrentUser is here');
    setCurrentUser(userData)
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      localStorage.removeItem('jwtToken');
      setCurrentUser(null)
      setIsAuthenticated(false)
    }
  }

  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} isAuth={isAuthenticated}/>
      <div className="container mt-5">
        <Switch>
          <Route path='/signup' component={ Signup } />
          <Route 
            path='/login'
            render={ (props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser}/> } />
            <Route path='/about' component={ About } />
            <PrivateRoute path='/profile' component={ Profile } user={currentUser} />
            <Route exact path ="/" component={ Welcome } />
            <Route exact path ="/imagesearch" component={ ImageSearch } />
            <Route exact path ="/tattooshops" component={ TattooShop } />
            <PrivateRoute path ="/favorites" component={ Favorites } user={currentUser} />
            <PrivateRoute path ="/profileedit" component={ ProfileEdit } user={currentUser}/>
            <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}
export default App;