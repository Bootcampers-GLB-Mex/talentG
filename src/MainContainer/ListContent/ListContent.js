import React from "react";
import PropTypes from 'prop-types';

import './listContent.css';

export default function ListContent(props) {
    const { list, title} = props;

    return (
        <section>
            <h1 className="list__title">{title}</h1>
            <ol className="list__content">
                {list.map((topic) => {
                    return <li key={topic}>{topic}</li>
                })}
            </ol>
        </section>
    );
}

ListContent.propTypes = {
    title: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.string)
}
