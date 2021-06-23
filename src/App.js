import React from 'react'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import MainContainer from './MainContainer/MainContainer';
import HomeworkFeedback from './MainContainer/HomeworkFeedback/HomeworkFeedback';


function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={MainContainer}/>
          <Route path='/homeworkFeedback' component={HomeworkFeedback}/>  
          {/* line 14, that path just is a test */}
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
