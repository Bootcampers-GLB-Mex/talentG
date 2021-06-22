export default function DailyClass() {

    return (
        <section className="dailyClass">
            <div className="dailyClass__contentLeft">
                <h1 className="dailyClass__title">Día 1 - CSS</h1>
                <div className="dailyClass__topics">
                    <h2 className="topics__title">Aprenderemos los conceptos core sobre CSS:</h2>
                    <ol className="topics__list">
                        <li>Qué es CCSOM y su importancia.</li>
                        <li>Qué son los selectores y su especificidad.</li>
                        <li>Cómo declarar los estilos en una hoja de estilos.</li>
                        <li>Propiedades para realizar layouting.</li>
                        <li>Flexbox.</li>
                        <li>Grid CSS.</li>
                    </ol>
                </div>
                <div className="dailyClass__resources">
                    <h2 className="resources__title">Recursos:</h2>
                    <ul className="resources__list">
                        <li><a href="/" alt="What is flex link">What is flex?</a></li>
                        <li><a href="/" alt="Understanding Grid Layout">Understanding Grid Layout</a></li>
                        <li><a href="/" alt="Understanding Grid Layout">CSS Selectors</a></li>
                    </ul>
                </div>
            </div>
            <div className="dailyClass__contentRigth">
                <figure className="dailyClass__figure">
                    <img src="/images/daily-class-1.png" alt="Day 1 Bootcamp:CSS"></img>
                    <figcaption hidden> UI Engineering Studio. Day 1. Bootcamp:CSS</figcaption>
                </figure>
                <p className="dailyClass__trainer">Trainer: <a href="/">Juan Crisóstomo</a></p>
            </div>
        </section>
    );
}