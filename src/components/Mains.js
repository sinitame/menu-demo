import React from "react";

export default function Mains({ meals }) {
  return (
    <section className="mains">
      {meals.map((meal, index) => (
        <article onClick={() => ShowCard() } className="menu-item" key={index}>
          <h3 className="mains-name">{meal.name}</h3>
          <strong className="mains-price">${meal.price}</strong>
          <p className="mains-description">{meal.description}</p>
        </article>
      ))}
    </section>
  );
}

function ShowCard(){
  alert("Card open")
}
