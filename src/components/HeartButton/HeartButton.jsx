import { useState } from "react";
import heart from "../../statics/heart.svg";

function HeartButton() {
  const [heartColor, setHeartColor] = useState("rgba(0, 0, 0, 0)");

  const handleHeartColor = () => {
    if (heartColor === "rgba(0, 0, 0, 0)") {
      setHeartColor("rgba(207, 78, 93, 1)");
    } else {
      setHeartColor("rgba(0, 0, 0, 0)");
    }
  };

  return (
    <img
      style={{
        fill: heartColor,
      }}
      src={heart}
      className="heart"
      onClick={handleHeartColor}
    />
  );
}

export default HeartButton;
