import React, { useState } from "react";
import { MenuContext } from "./components/MenuContext";
import { useData } from "./hooks/useData";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  // TODO: Crear variable de entorno para guardar los endpoints
  console.log(process.env);
  const [{ loading, data, error }] = useData("http://localhost:8085/products");
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
