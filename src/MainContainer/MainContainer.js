import React from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DailyClass from './DailyClass/DailyClass';
import HomeworkFeedBack from './HomeworkFeedback/HomeworkFeedback';
import Button from "./button1/button";
import "./MainContainer.css";

export default function MainContainer() {
   
const [isTrainer] = useState(true);
    
return (
      <>  
        <main className="MainContainer">  
                <DailyClass isTrainer={isTrainer} />
                <HomeworkFeedBack/>
            <div className= "ContainerButtons">
                <Button children="Editar Perfil"></Button>
                <Button children="Ver Agenda"></Button>
                <Button children="Ver Feedback"></Button>
            </div>
        </main>  
        </>    
    )
}
