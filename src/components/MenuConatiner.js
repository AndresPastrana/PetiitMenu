import Category from "./Category";
import React, { useContext } from "react";

import { MenuContext } from "./MenuContext";
import LoadingSpinner from "./ui/LoadingSpinner";
import ErrorMessage from "./ui/ErrorMessage";

const MenuConatiner = () => {
  const { loading, error } = useContext(MenuContext);

  return (
    <>
      <div>
        {loading && <LoadingSpinner>Loading.....</LoadingSpinner>}
        {!loading && error && <ErrorMessage>Error Mesagge</ErrorMessage>}
        {!loading && !error && <Category />}
      </div>
    </>
  );
};

export default MenuConatiner;
