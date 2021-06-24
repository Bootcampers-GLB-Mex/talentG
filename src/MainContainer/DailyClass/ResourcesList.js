import PropTypes from 'prop-types';

export default function ResourcesList(props) {
    const { resources } = props;
    return (
        <>
            <h2 className="resources__title">Recursos:</h2>
            <ul className="resources__list">
                {resources.map((resource) => {
                    return (
                        <li key={resource.title}><a href={resource.href} alt={resource.title}>{resource.title}</a></li>
                    );
                })}
            </ul>
        </>
    );
}

ResourcesList.propTypes = {
    resources: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        href: PropTypes.string
    }))
}