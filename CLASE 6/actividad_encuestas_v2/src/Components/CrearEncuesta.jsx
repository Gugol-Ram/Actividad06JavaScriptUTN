import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CrearEncuesta = ({ agregarEncuesta }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    agregarEncuesta(data);
    navigate("/");
  };
  //no realizó validaciones.tampoco label

  return (
    <div>
      <h1>Crear Encuesta</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Titulo: </label>
        <input
          type="text"
          placeholder="Encuesta"
          {...register("titulo", {
            required: "Este campo es obligatorio",
            maxLength: {
              value: 50,
              message: "El título debe tener menos de 50 caracteres",
            },
          })}
        />
        {errors.titulo && <p>{errors.titulo.message}</p>}

        <label>Descripción: </label>
        <input
          type="text"
          placeholder="Descripción"
          {...register("descripcion", {
            required: "Este campo es obligatorio",
            maxLength: {
              value: 200,
              message: "El:Descripción debe tener menos de 200 caracteres",
            },
          })}
        />
        {errors.descripcion && <p>{errors.descripcion.message}</p>}

        <label>Preguntas: </label>
        <input
          type="text"
          placeholder="Preguntas"
          {...register("preguntas", {
            required: "Este campo es obligatorio",
            maxLength: {
              value: 200,
              message: "El:Preguntas debe tener menos de 200 caracteres",
            },
          })}
        />
        {errors.preguntas && <p>{errors.preguntas.message}</p>}

        <button type="submit">Guardar Encuesta</button>
      </form>
    </div>
  );
};

export default CrearEncuesta;
