import { createContext, useContext, useState } from "react";

let Context = createContext();

let ContextCreater = ({ children }) => {
  const [theme, setTheme] = useState("darken");
  const data = { theme, setTheme };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export let UserContext = () => useContext(Context);

export default ContextCreater;
