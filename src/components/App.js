import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const appClass = darkMode ? "App dark" : "App light"

  function handleClick() {
    setDarkMode(!darkMode)
    //can also be written like setDarkMode(darkMode => !darkMode) if you are working with more complex problems and code.
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;