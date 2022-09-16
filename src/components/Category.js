import { List, ListItem } from "@mui/material";
import React, { useContext, useMemo } from "react";

import { filterByCategory } from "../helpers/filters";
import { MenuContext } from "./MenuContext";
import SubCategory from "./SubCategory";

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
    <div className="__category">
      <h4>{categoryName}</h4>
      <ul>
        {filteredData.map((e) => {
          const [name, items] = e;
          return <SubCategory key={name} name={name} items={items} />;
        })}
      </ul>
    </div>
  );
};

export default Category;
