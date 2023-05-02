import { useState } from "react";

export default function Collapse({ titleCollapse, contentCollapse }) {
  const [displayCollapse, setDisplayCollapse] = useState(false);

  return (
    <section className="collapse">
      <button onClick={() => setDisplayCollapse(!displayCollapse)}>
        {titleCollapse} <span>^</span>
      </button>
      {displayCollapse ? (
        <div className="contentCollapse">
          <p>{contentCollapse}</p>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
