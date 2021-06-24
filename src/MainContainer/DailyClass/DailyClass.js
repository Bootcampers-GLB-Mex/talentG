import PropTypes from 'prop-types';

import TopicList from './TopicList';
import ResourcesList from './ResourcesList';

import './dailyClass.css';

export default function DailyClass(props) {

    const { isTrainer, dailyScheduleData, trainer } = props;
    const topicsTitle = "Aprenderemos los conceptos core sobre CSS:";
    const dailyImage = {
        src: "/assets/img/daily-class-1.png",
        alt: "Day 1 Bootcamp:CSS",
        caption: "UI Engineering Studio. Day 1. Bootcamp:CSS"
    };
    const resources = [
        {
            title: "What is flex?",
            href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"
        },
        {
            title: "Understanding Grid Layout",
            href: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid"
        },
        {
            title: "CSS Selectors",
            href: "https://www.w3schools.com/cssref/css_selectors.asp"
        },
    ]

    return (
        <section className="dailyClass">
            <div className="dailyClass__contentLeft">
                <h1 className="dailyClass__title">Día {dailyScheduleData.day} - {dailyScheduleData.topic}</h1>
                <div className="dailyClass__topics">
                    <TopicList summary={dailyScheduleData.summary} topicsTitle={topicsTitle}></TopicList>
                </div>
                <div className="dailyClass__resources">
                    <ResourcesList resources={resources}></ResourcesList>
                </div>
            </div>
            <div className="dailyClass__contentRigth">
                <figure className="dailyClass__figure">
                    <img className="dailyClass__image" src={process.env.PUBLIC_URL + dailyImage.src} alt={dailyImage.alt}></img>
                    <figcaption hidden>{dailyImage.caption}</figcaption>
                </figure>
                <p className="dailyClass__trainer">Trainer: <a href="/">{trainer.firstName + trainer.lastName}</a></p>
            </div>
            {isTrainer &&
                <>
                    <button className="dailyClass__options"><img src={process.env.PUBLIC_URL + "/assets/img/options.png"} alt=""></img></button>
                    <button className="dailyClass__edit">Editar</button>
                </>
            }
        </section>
    );
}

DailyClass.propTypes = {
    isTrainer: PropTypes.bool,
    dailyScheduleData: PropTypes.shape({
        date: PropTypes.string,
        day: PropTypes.number,
        id: PropTypes.number,
        id_Trainer: PropTypes.number,
        id_training: PropTypes.number,
        summary: PropTypes.array,
        topic: PropTypes.string
    }),
    trainer: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string
    }),
    dailyImage: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
        caption: PropTypes.string
    })
}