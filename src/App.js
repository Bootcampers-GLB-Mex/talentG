import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import { api } from './api/apiMock';
import MainContainer from './MainContainer/MainContainer';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";
import axios from "axios";

const ENDPOINT = "http://proyectofinalbootcamp-env.eba-nmb4rsib.us-east-2.elasticbeanstalk.com/";

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
  // const [initialData, setInitialData] = useState({});
  let totalData;


  function handleLogin(mail, password, isTrainer) {

    let train = isTrainer ? "trainer" : "student";

    let config = {
      method: 'post',
      url: ENDPOINT + train + '/login?email=' + mail,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'accept': '*/*'
      }
    };

    axios(config)
      .then(function (response) {
        totalData = response.data.content;
        console.log(totalData);
      })
      .catch(function (error) {
        console.log(error);
      });

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
              <MainContainer initialData={totalData} />
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
