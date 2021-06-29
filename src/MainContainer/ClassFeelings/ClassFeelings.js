import React from "react";
import PropTypes from "prop-types";
import "./classFeelings-styles.css";

export default function classFeelings(props) {
  // State temporal
  const { classVotes } = props;
  return (
    <>
      <div className="feelings-info">
        <span>Sentimientos de la clase</span>
        <span>{classVotes.totalVotes} votos</span>
      </div>
      <div className="feelings-percentage">
        <div className="feelings-percentage__chart">
          <img
            src={process.env.PUBLIC_URL + "/assets/img/happy_face.svg"}
            alt="happy-face"
          />
          <h1>{classVotes.like}%</h1>
        </div>
        <div className="feelings-percentage__chart">
          <img
            src={process.env.PUBLIC_URL + "/assets/img/sad_face.svg"}
            alt="sad-face"
          />
          <h1>{classVotes.dislike}%</h1>
        </div>
      </div>
    </>
  );
}

classFeelings.propTypes = {
  classVotes: PropTypes.shape({
    totalVotes: PropTypes.number,
    like: PropTypes.number,
    dislike: PropTypes.number,
  }),
};
