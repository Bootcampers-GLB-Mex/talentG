import PropTypes from 'prop-types';

export default function ResourcesList() {

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