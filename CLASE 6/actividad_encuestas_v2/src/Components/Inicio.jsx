import React from "react";
import { Link } from "react-router-dom";

const Inicio = ({ listaEncuestas }) => {
  console.log(listaEncuestas);

  return (
    <div>
      <h1>Lista de Encuestas</h1>
      <ul>
        {listaEncuestas.map((encuesta) => {
          return (
            <li key={encuesta.id}>
              <Link to={`/encuestas/${encuesta.id}`}>{encuesta.titulo}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Inicio;
