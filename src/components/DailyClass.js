import TopicList from './TopicList';
import ResourcesList from './ResourcesList';

export default function DailyClass() {

    const trainer = {
        name: "Juan Crisóstomo",
        href: "/"
    };

    const dailyImage = {
        src: "/images/daily-class-1.png",
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
                    <img src={dailyImage.src} alt={dailyImage.alt}></img>
                    <figcaption hidden>{dailyImage.caption}</figcaption>
                </figure>
                <p className="dailyClass__trainer">Trainer: <a href={trainer.href}>{trainer.name}</a></p>
            </div>
        </section>
    );
}