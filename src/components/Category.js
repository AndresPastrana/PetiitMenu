
import React, { useContext, useMemo } from "react";

import { filterByCategory } from "../helpers/filters";
import { MenuContext } from "./MenuContext";
import SubCategory from "./SubCategory";
const Img1=require('../img/margarita-g29be97c77_640.jpg')
const Category = () => {
  const { category, data } = useContext(MenuContext);
  const arregloCategorias = ["TRAGOS", "COMIDAS", "COCTELES"];
  const categoryName = arregloCategorias[category];

  const filteredData = useMemo(
    () => filterByCategory(categoryName, data),
    [categoryName, data]
  );
  //TODO: Agergar animacion al componete a su entrada
  return (
    <div className="__category animate__animated animate__fadeIn category-style">
      <div className="category-container">
      <h2 className ="__category_titule ">{categoryName}</h2>
      <img className="category-img"
        src={Img1}
        loading="lazy"
      />
      </div>
      <ul>
        {filteredData.map((e) => {
          const [name, items] = e;
          return (
            <SubCategory
              key={`${name}${Date.now()}`}
              name={name}
              items={items}
            />
          );
        })}
      </ul>
      
    </div>
  );
};

export default Category;
