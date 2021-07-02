import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from "axios";

import './App.css';

import MainContainer from './MainContainer/MainContainer';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";

import { config } from './api/endpoint';
import { api } from './api/apiMock';

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
  const [initialData, setInitialData] = useState(api.getInitialData());
  const [isTrainer, setIsTrainer] = useState(false);

  function handleInitial(res) {
    setInitialData((prev) => ({
      ...prev,
      ...res
    }));
  }

  function handleLogin(mail, password , isTrainer) {
    setIsTrainer(isTrainer);
    const train = isTrainer ? "trainer" : "student";

    axios(config.login(mail, password, train))
      .then(((response) => {
        handleInitial(response.data.content);
      }))
      .catch(function (error) {
        console.log(error);
      });

    setIsLogin(() => true);
  }

  function handleLogout() {
    setIsLogin(() => false);
  }

  return isLogin ?
    <>
      <Router>
        <div className="App">
          <Header logout={handleLogout} />
          <Switch>
            <Route exact path='/'>
              <MainContainer 
                initialData={initialData} 
                isTrainer={isTrainer}/>
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
