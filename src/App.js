import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Login from "./screens/login/Login";

function App() {
  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;
