import React, { useState } from "react";

function Item({ name, category }) {
  const [add, setAdd] = useState(true)
  const liClass = add ? "" : "in-cart"
  const text = add ? "Add to Cart" : "Remove from Cart"
  
  function handleCart() {
    setAdd((add) => !add)
  }

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{text}</button>
    </li>
  );
}

export default Item;
