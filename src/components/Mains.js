import React from "react";
import MediaCard from "./Card";

export default function Mains({ meals, clickHandler }) {
  return (
    <section className="mains">
      {meals.map((meal, index) => (
        <article onClick={() => clickHandler() } className="menu-item" key={index}>
          <h3 className="mains-name">{meal.name}</h3>
          <strong className="mains-price">${meal.price}</strong>
          <p className="mains-description">{meal.description}</p>
        </article>
      ))}
    </section>
  );
}
