import { useState } from 'react';

import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import DailyClass from './DailyClass/DailyClass';
import HomeworkFeedback from './HomeworkFeedback/HomeworkFeedback';

function App() {

  const [isTrainer] = useState(true);

  return (
    <div className="App">
      <Header />
      <DailyClass isTrainer={isTrainer} />
      <HomeworkFeedback/>
      <Footer />
    </div>
  );
}

export default App;
