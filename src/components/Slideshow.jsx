import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Slideshow({ pictures }) {
  const [picture, setPicture] = useState(pictures[0]);

  function previousPicture() {
    const indexImage = pictures.indexOf(picture);

    setPicture(pictures[(indexImage-1+pictures.length)%pictures.length])
  }

  function nextPicture() {
    const indexImage = pictures.indexOf(picture);

    setPicture(pictures[(indexImage+1)%pictures.length])
  }

  return (
    <div className="carousel">
      <img className="carouselImg" src={picture} alt="" />
      {pictures.length > 1 ? (
        <>
          <p>
            {pictures.indexOf(picture) + 1} / {pictures.length}
          </p>
          <button
            className="btnCarouselPrevious"
            onClick={() => previousPicture()}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="btnCarouselNext" onClick={() => nextPicture()}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </>
      ) : ""}
    </div>
  );
}
