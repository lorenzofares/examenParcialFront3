import { useState } from "react";
import "./App.css";
import { clubes } from "./clubes";
import Clubes from "./Components/Clubes";
import Form from "./Components/Form";

function App() {
  const [isSelected, setIsSelected] = useState({
    status: false,
    hincha: null,
  });

  return (
    <>
      {isSelected.status ? <Form hincha={isSelected.hincha} /> : null}
      {clubes.map((club) => (
        <Clubes key={club.id} setIsSelected={setIsSelected} club={club} />
      ))}
    </>
  );
}

export default App;

