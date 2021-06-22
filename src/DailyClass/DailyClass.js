import PropTypes from 'prop-types';

import TopicList from './TopicList';
import ResourcesList from './ResourcesList';

import './dailyClass.css';

export default function DailyClass(props) {

    const { isTrainer } = props;

    const trainer = {
        name: "Juan Crisóstomo",
        href: "/"
    };

    const dailyImage = {
        src: "/assets/img/daily-class-1.png",
        alt: "Day 1 Bootcamp:CSS",
        caption: "UI Engineering Studio. Day 1. Bootcamp:CSS"
    };

    return (
        <section className="dailyClass">
            <div className="dailyClass__contentLeft">
                <h1 className="dailyClass__title">Día 1 - CSS</h1>
                <div className="dailyClass__topics">
                    <TopicList></TopicList>
                </div>
                <div className="dailyClass__resources">
                    <ResourcesList></ResourcesList>
                </div>
            </div>
            <div className="dailyClass__contentRigth">
                <figure className="dailyClass__figure">
                    <img className="dailyClass__image" src={process.env.PUBLIC_URL + dailyImage.src} alt={dailyImage.alt}></img>
                    <figcaption hidden>{dailyImage.caption}</figcaption>
                </figure>
                <p className="dailyClass__trainer">Trainer: <a href={trainer.href}>{trainer.name}</a></p>
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
    trainer: PropTypes.shape({
        name: PropTypes.string,
        href: PropTypes.string
    }),
    dailyImage: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
        caption: PropTypes.string
    })
}