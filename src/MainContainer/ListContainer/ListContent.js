import PropTypes from 'prop-types';
import React from "react";

import './listContainer.css';

export default function ListContent({list, title}) {

    return (
        <section>
            <h1 className="list__title" data-testid="titlelist">{title}</h1>
            <ol className="list__content" data-testid="contentlist">
                {Array.isArray(list) && list.map((item) =>
                    <li key={Math.floor(Math.random() * 100) * Date.now()}><a href="/">{item}</a></li>
                )}
            </ol>
        </section>
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
