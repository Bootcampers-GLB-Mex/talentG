import { useState } from 'react';

import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import DailyClass from './DailyClass/DailyClass';
import HomeworkFeedback from './HomeworkFeedback/HomeworkFeedback';
import {Button} from "./button1/button";

function App() {

  const [isTrainer] = useState(true);

  return (
    <div className="App">
      <Header />
      <DailyClass isTrainer={isTrainer} />
      <HomeworkFeedback/>
      <div>
        <div className= "App">
            <Button>Editat Perfil</Button>
        </div>
        <div></div>
        <div className= "App">
            <Button>Ver Agenda</Button>
        </div>
        <div></div>
        <div className= "App">
                <Button>Ver Feedback</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
