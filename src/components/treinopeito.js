// components/TreinoPeito.js
import React from "react";
import "@/components/css/tabela.css";

function mostrarExercicios(tipo) {
  var grupos = document.getElementsByClassName("grupo-exercicio");
  for (var i = 0; i < grupos.length; i++) {
    grupos[i].classList.remove("mostrar");
  }

  var exercicios = document.getElementById("exercicios-" + tipo);
  if (exercicios) {
    exercicios.classList.add("mostrar");
  }
}

const TreinoPeito = () => {
  return (
    <div>
      <div id="links-container">
        <a href="#treino" onClick={() => mostrarExercicios("peito")}>
          Peito
        </a>
      </div>
      <div id="exercicios-peito" className="grupo-exercicio">
        <h3>Peito:</h3>
        <a href="#peito1">Flexões</a>
      </div>
    </div>
  );
};

export default TreinoPeito;
