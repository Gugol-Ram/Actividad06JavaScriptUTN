import { useParams, Link } from "react-router-dom";

const Encuesta = ({ listaEncuestas, responderEncuesta }) => {
  const { id } = useParams();

  console.log(listaEncuestas);
  const encuesta = listaEncuestas.find((encu) => encu.id === parseInt(id));
  console.log("Preguntas: " + encuesta.preguntas);

  return (
    <div>
      <div className="encuesta-item.container">
        <div className="encuesta-item">
          <h2>{encuesta.titulo}</h2>
          <p>{encuesta.descripcion}</p>
          <br />
          <h2>Preguntas</h2>
          <p>
            {!encuesta.preguntas && <p>Sin pregutnas DEfinidas</p>}
            {encuesta.preguntas &&
              encuesta.preguntas.map((pregunta) => (
                <div key={pregunta.id}>
                  <p>{pregunta.pregunta} </p>
                  <ol>
                    {pregunta.opciones.map((opcion) => (
                      <li key={opcion.id}>{opcion.texto}</li>
                    ))}
                  </ol>
                </div>
              ))}
          </p>
          <button onClick={() => responderEncuesta(id)}>Responder</button>
        </div>
      </div>
      <Link to="/">Volver</Link>
    </div>
  );
};

export default Encuesta;
