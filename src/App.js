import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import DailyClass from './DailyClass/DailyClass';
import HomeworkFeedback from './HomeworkFeedback/HomeworkFeedback';

function App() {
  return (
    <div className="App">
      <Header/>
      <DailyClass/>
      <HomeworkFeedback/>
      <Footer/>
    </div>
  );
}

export default App;
