import React, { useState } from "react";
import { ReactComponent as Heart } from "../../statics/heart.svg";

const Selection = () => {
  const [fillColor, setFillColor] = useState("");
  const [strokeColor, setStrokeColor] = useState("");
  const alter = () => {
    setFillColor((fillColor) =>
      fillColor === "rgba(207, 78, 93, 1)"
        ? "rgba(0,0,0,0)"
        : "rgba(207, 78, 93, 1)"
    );
    if (fillColor === "rgba(207, 78, 93, 1)") {
      setStrokeColor(fillColor);
    } else {
      setStrokeColor("rgba(0,0,0,1)");
    }
  };
  return (
    <div className="selection">
      <div className="favourite" onMouseUp={alter}>
        <Heart
          style={{ fill: fillColor, stroke: strokeColor }}
          className="heart"
        />
      </div>
      <div className="explore-con">
        <button className="explore">Explore</button>
      </div>
    </div>
  );
};

export default Selection;
