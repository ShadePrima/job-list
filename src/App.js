import React from "react";
import "./App.css";

function App() {
  React.useEffect(() => {
    try {
      fetch(
        "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
      )
        .then((response) => response.json())
        .then((data) => console.log(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="App">
      <div>Hello</div>
    </div>
  );
}

export default App;
