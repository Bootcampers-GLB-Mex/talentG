import PropTypes from 'prop-types';
import React from "react";

import './listContainer.css';

export default function ListContent({list, title}) {
 
    return (
        <ol className="list__content" data-testid="contentlist">
            {Array.isArray(list) && list.map((item) =>
                <li key={item}><a href="/">{item}</a></li>
            )}
        </ol>
);
}

ListContent.propTypes = {
    title: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.string)
}

ListContent.defaultProps = {
    title: "Mis alumnos",
    list: ["Victor Cruz", "Atziri Pérez"]
}
