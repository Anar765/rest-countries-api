import { createContext, useState, type SetStateAction } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

interface AppContext {
  isDarkMode: boolean,
  setIsDarkMode: React.Dispatch<SetStateAction<boolean>>
}

export const AppContext = createContext<AppContext>({
  isDarkMode: false,
  setIsDarkMode: () => {}
});

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <AppContext.Provider value={{isDarkMode, setIsDarkMode}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App