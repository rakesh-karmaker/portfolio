import { createContext, useContext, useState } from "react";

const RenderContext = createContext({});

const RenderProvider = ({ children }) => {
  const [start, setStart] = useState(false);
  return (
    <RenderContext.Provider value={{ start, setStart }}>
      {children}
    </RenderContext.Provider>
  );
};

const useRender = () => {
  const context = useContext(RenderContext);
  if (!context) {
    throw new Error("useRender must be used within a RenderProvider");
  }
  return context;
};

export { RenderProvider, useRender };
