import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState(null);
  async function getMessage() {
    const { data } = await axios.get("/api/testing");
    setMessage(data);
  }
  useEffect(() => {
    getMessage();
  }, []);
  return <div className="App">{message}</div>;
}

export default App;
