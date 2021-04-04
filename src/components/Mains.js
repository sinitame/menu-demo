import React from "react";

export default function Mains({ meals, type, clickHandler}) {
  return (
    <section className="mains">
      <h2 className="extras-heading">{type}</h2>
      {meals.map((meal, index) => (
        <article onClick={() => clickHandler(meal.name, meal.description) } className="menu-item" key={index}>
          <h3 className="mains-name">{meal.name}</h3>
          <strong className="mains-price">${meal.price}</strong>
          <p className="mains-description">{meal.description}</p>
        </article>
      ))}
    </section>
  );
}
