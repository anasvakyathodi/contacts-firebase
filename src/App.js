import React from "react";
import Contacts from "./components/Contacts";
import "./App.css";

function App() {
  return (
    <div className="row">
      <div className="col-md-9 offset-md-1">
        <Contacts />
      </div>
    </div>
  );
}

export default App;
