import PropTypes from 'prop-types';

export default function ResourcesList(props) {
    const { resources } = props;
    return (
        <>
            <h2 className="resources__title">Recursos:</h2>
            <ol className="resources__list">
                {resources.map((resource) => {
                    return (
                        <li key={resource.id}><a href={resource.link} alt={resource.summary}>{resource.summary}</a></li>
                    );
                })}
            </ol>
        </>
    );
}

ResourcesList.propTypes = {
    resources: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        href: PropTypes.string
    }))
}