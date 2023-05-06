import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";

export default function Collapse({ titleCollapse, contentCollapse }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="collapse">
      <button onClick={() => setIsOpen(!isOpen)}>
        {titleCollapse} <span>{isOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />} </span>
      </button>
      {isOpen ? (
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
