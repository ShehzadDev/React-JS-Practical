import React, { useState, useContext, createContext } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Post from "./components/Post";
import Footer from "./components/Footer";


// Create a context for the theme
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light"); // Set the initial theme here

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#000",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")
      }>
          Toggle Theme
        </button>
        <Header name="React" />
        <Hero />
        <Post />
        <hr />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
