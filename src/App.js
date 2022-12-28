import { createContext, useState } from "react";
import "./App.css";
import InsideBox from "./components/InsideBox";

export const ThemeContext = createContext();

function App() {
    let [darkTheme, changeTheme] = useState(false);

    return (
        <div className="App">
            <button onClick={() => changeTheme((prev) => !prev)}>Toggle</button>
            <ThemeContext.Provider value={darkTheme}>
                <InsideBox />
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
