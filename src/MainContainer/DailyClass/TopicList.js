import PropTypes from 'prop-types';

export default function TopicList(props) {
    const { summary, topicsTitle } = props;

    return (
        <>
            <h2 className="topics__title">{!topicsTitle ? topicsTitle : null }</h2>
            <ol className="topics__list">
                <li>{summary}</li>
            </ol>
        </>
    )
}

TopicList.propTypes = {
    topicsTitle: PropTypes.string,
    summary: PropTypes.string
}