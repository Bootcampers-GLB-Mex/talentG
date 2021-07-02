import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import { api } from './api/apiMock';
import MainContainer from './MainContainer/MainContainer';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";

function UnderConstruction() {
  return (
    <div className="myProfile">
      <h1 className="myProfile__title">Talent G</h1>
      <p className="myProfile__subtitle">Under Construction</p>
    </div>
  );
}

function App() {
  const [isLogin, setIsLogin] = useState(false);

  function handleLogin(mail, password, isTrainer) {
    console.log(mail);
    console.log(password);
    console.log(isTrainer);
    setIsLogin(() => {
      return !isLogin ? api.getLogin() : !isLogin;
    });
  }

  return isLogin ?
    <>
      <Router>
        <div className="App">
          <Header logout={handleLogin} />
          <Switch>
            <Route exact path='/'>
              <MainContainer isLogin={isLogin} />
            </Route>
            <Route path='/myProfile' component={UnderConstruction} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
    : <Login login={handleLogin} />
}

export default App;
