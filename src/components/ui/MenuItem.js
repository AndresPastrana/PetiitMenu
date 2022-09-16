import React from "react";

const MenuItem = ({
  name,
  desc = "Esta es la descripcion por defecto",
  price,
}) => {
  return (
    <li>
      <div className="__menu_item">
        <div>
          <p>{name}</p>
          <p>{desc}</p>
        </div>
        <div>
          <p className="price">{price} cup</p>
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
