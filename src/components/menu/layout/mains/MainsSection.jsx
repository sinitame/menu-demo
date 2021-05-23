import React from "react";

import './mains.css';
import '../menu-layout.css';

export default function MainSection({meals, type, clickHandler}) {
  return (
      <section className="mains">
        <h2 className="extras-heading">{type}</h2>
        {meals.map((meal, index) => (
            <div className="item-container">
              <article onClick={() => clickHandler(meal.img, meal.name,
                  meal.description)} className="menu-item" key={index}>
                <h3 className="mains-name">{meal.name}</h3>
                <strong className="mains-price">{meal.price}€</strong>
                <p className="mains-description">{meal.description}</p>
              </article>
            </div>
        ))}
      </section>
  );
}
