import React from 'react'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import MainContainer from './MainContainer/MainContainer';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import AgendaModal from './AgendaModal/AgendaModal';
import ModalContainer from './ModalContainer/ModalContainer';

function App() {

  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path='/' component={MainContainer}/>
          <Route path='/homeworkFeedback' component={HomeworkFeedback}/> 
          {/* line 14, that path just is a test */}
        </Switch> 
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
