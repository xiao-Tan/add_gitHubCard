import React from "react";
import "./App.css";
import CardList from "./components/CardList";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [profile, setProfile] = useState([]);

  const addNewProfile = (newProfileData) => {
    setProfile([...profile, newProfileData]);
  };

  return (
    <div className="App">
      <div className="header">The GitHub Cards</div>
      <Form onSubmit={addNewProfile} />
      <CardList profile={profile} />
    </div>
  );
}

export default App;
