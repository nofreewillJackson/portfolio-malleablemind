import React, { useContext, createContext, useState, useEffect } from "react";

const WindowSizeContext = createContext();

export function useWindowSize() {
  return useContext(WindowSizeContext);
}

export default function WindowSizeProvider({ children }) {
  const [windowSmall, setWindowSmall] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowSmall(window.innerWidth < 1337); // || window.innerHeight < 555)
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Check on initial render

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
      <WindowSizeContext.Provider value={windowSmall}>
        {children}
      </WindowSizeContext.Provider>
  );
}
