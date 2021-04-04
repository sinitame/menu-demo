import React from "react";

export default function ExtraSection({type, extras, clickHandler}) {
  return (
      <section className="extras">
        <h2 className="extras-heading">{type}</h2>
        {extras.map((extra, index) => (
            <article onClick={() => clickHandler(extra.name, extra.description)}
                     className="menu-item" key={index}>
              <div className="extras-name">{extra.name}</div>
              <strong className="extras-price">${extra.price}</strong>
            </article>
        ))}
      </section>
  );
}
