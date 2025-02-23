import { createContext, useContext, useEffect, useState } from "react";

const RenderContext = createContext({});

const RenderProvider = ({ children }) => {
  const [rendered, setRendered] = useState(false);
  const [start, setStart] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);
  return (
    <RenderContext.Provider value={{ rendered, setRendered, start, setStart }}>
      {children}
    </RenderContext.Provider>
  );
};

const useRender = () => {
  const context = useContext(RenderContext);
  console.log(context);
  if (!context) {
    throw new Error("useRender must be used within a RenderProvider");
  }
  return context;
};

export { RenderProvider, useRender };
