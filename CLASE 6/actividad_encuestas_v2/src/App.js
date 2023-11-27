import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Encuesta from "./Components/Encuesta";
import NotFound from "./Components/NotFound";
import Inicio from "./Components/Inicio";
import Menu from "./Components/Menu";
import CrearEncuesta from "./Components/CrearEncuesta";
import encuestas from "./Data/encuestas.json";

function App() {
  const [listaEncuestas, setListaEncuestas] = useState(encuestas);

  const agregarEncuesta = (nuevaEncuesta) => {
    nuevaEncuesta.id = listaEncuestas.length + 1;
    setListaEncuestas([...listaEncuestas, nuevaEncuesta]);
  };

  const responderEncuesta = (id, respuestas) => {
    const nuevaEncuesta = listaEncuestas.find(
      (encu) => encu.id === parseInt(id)
    );
    nuevaEncuesta.respuestas = [respuestas];
    // setListaEncuestas([...listaEncuestas]);
  };

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio listaEncuestas={listaEncuestas} />} />
        <Route
          path="/encuesta/crear"
          element={<CrearEncuesta agregarEncuesta={agregarEncuesta} />}
        />
        <Route
          path="/encuesta/:id"
          element={
            <Encuesta
              listaEncuestas={listaEncuestas}
              responderEncuesta={responderEncuesta}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
