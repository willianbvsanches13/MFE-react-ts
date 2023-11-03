import { createContext, useState, useEffect } from "react";

export const AppContext = createContext({
  sidebarOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setSidebarOpen: (_open: boolean) => {},
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    console.log("sidebarOpen", sidebarOpen);
  }, [sidebarOpen]);

  return (
    <AppContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
