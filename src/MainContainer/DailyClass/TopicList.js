import PropTypes from 'prop-types';

export default function TopicList(props) {
    const { summary, topicsTitle } = props;

    return (
        <>
            <h2 className="topics__title">{topicsTitle}</h2>
            <ol className="topics__list">
                {summary.map((topic) => {
                    return <li key={topic}>{topic}</li>
                })}
            </ol>
        </>
    )
}

TopicList.propTypes = {
    topicsTitle: PropTypes.string,
    summary: PropTypes.array
}