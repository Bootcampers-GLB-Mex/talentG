import PropTypes from 'prop-types';

export default function TopicList() {
    const topicsTitle = "Aprenderemos los conceptos core sobre CSS:";
    const dailyTopics = [
        {
            title: "Qué es CSSOM y su importancia."
        },
        {
            title: "Qué son los selectores y su especificidad."
        },
        {
            title: "Cómo declarar los estilos en una hoja de estilos."
        },
        {
            title: "Propiedades para realizar layouting."
        },
        {
            title: "Flexbox.",
        },
        {
            title: "Grid CSS."
        }
    ];

    return (
        <>
            <h2 className="topics__title">{topicsTitle}</h2>
            <ol className="topics__list">
                {dailyTopics.map((topic) => {
                    return <li key={topic.title}>{topic.title}</li>
                })}
            </ol>
        </>
    )
}

TopicList.propTypes = {
    topicsTitle: PropTypes.string,
    dailyTopics: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string
    }))
}