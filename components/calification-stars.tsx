import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as filledStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
interface CalificationStarsProps {
  numStars: number;
}

const CalificationStars: React.FC<CalificationStarsProps> = ({ numStars }) => {
  const renderStars = () => {
    const stars = [];
    const maxStars = 5;

    for (let i = 0; i < maxStars; i++) {
      if (i < numStars) {
        stars.push(
          <FontAwesomeIcon key={i} icon={filledStar} color="yellow" />
        );
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={emptyStar} color="yellow" />);
      }
    }

    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default CalificationStars;
