import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Rating({ rating, indexAnnonce }) {
  const stars = [];
  const starsInactive = [];
  for (let index = 0; index < rating; index++) {
    stars.push(index + 1);
  }

  if (stars.length < 5) {
    const starsMissing = 5 - stars.length;
    for (let index = 0; index < starsMissing; index++) {
      starsInactive.push(index + 1);
    }
  }

  return (
    <div className="rating">
      {stars.map((star, index) => (
        <FontAwesomeIcon
          key={`${indexAnnonce} - Star ${index + 1}`}
          icon={faStar}
          className="starActive"
        />
      ))}
      {stars.length !== 5
        ? starsInactive.map((starInactive, index) => (
            <FontAwesomeIcon
              key={`${indexAnnonce} - Star inactive ${index + 1}`}
              icon={faStar}
            />
          ))
        : null}
    </div>
  );
}
