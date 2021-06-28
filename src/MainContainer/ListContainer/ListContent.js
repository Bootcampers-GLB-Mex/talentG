import PropTypes from 'prop-types';
import React from "react";

import './listContainer.css';

export default function ListContent(props) {
    const { list, title} = props;

    return (
        <section>
            <h1 className="list__title" data-testid="titlelist">{title}</h1>
            <ol className="list__content" data-testid="contentlist">
                {list.map((item) => {
                    return <li key={item}>{item}</li>
                })}
            </ol>
        </section>
    );
}

ListContent.propTypes = {
    title: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.string)
}
