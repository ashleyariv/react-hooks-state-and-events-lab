import React, {useState} from "react";

function Item({ name, category }) {
  const [itemInCart, setItemInCart] = useState(false)
  const addItem =  itemInCart? "Add To Cart" : "Remove From Cart"
  const className = itemInCart? "in-cart" : ""

  function handleClick() {
    setItemInCart(!itemInCart)
  }

  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{addItem}</button>
    </li>
  );
}

export default Item;
