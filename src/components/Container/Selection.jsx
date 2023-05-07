import React from "react";
import heart from '../../statics/heart.svg';

const Selection = () => {

  const alter = () => {
    alert("test");
  };

  return (
    <div className="selection">
      <div className="favourite" onClick={alter}>
        <img src={heart} alt="favourite icon" />
      </div>
      <div className="explore-con">
        <button className="explore">Explore</button>
      </div>
    </div>
  );
}

export default Selection;
