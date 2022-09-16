import React, { useState } from "react";
import { MenuContext } from "./components/MenuContext";
import { useData } from "./hooks/useData";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const [{ loading, data, error }] = useData(process.env.REACT_APP_PRODUCTS);
  const [category, setCategory] = useState(0);
  return (
    <MenuContext.Provider
      value={{
        loading,
        error,
        data,
        category,
        setCategory,
      }}
    >
      <AppRoutes />
    </MenuContext.Provider>
  );
};

export default App;
