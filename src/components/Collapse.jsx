import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";

export default function Collapse({ titleCollapse, contentCollapse }) {
  const [displayCollapse, setDisplayCollapse] = useState(false);

  return (
    <section className="collapse">
      <button onClick={() => setDisplayCollapse(!displayCollapse)}>
        {titleCollapse} <span>{displayCollapse ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />} </span>
      </button>
      {displayCollapse ? (
        <div className="contentCollapse">
          {typeof contentCollapse === "object" ? (
            <ul>
              {contentCollapse.map((content) => (
                <li key={` Équipement - ${content}`}>{content}</li>
              ))}
            </ul>
          ) : (
            <p>{contentCollapse}</p>
          )}
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
