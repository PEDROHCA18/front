// pages/treino.js
"use client";
import "@/components/css/tabela.css";
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./footer";
import "@/components/menu2";
import Image from "next/image";
import sobree from "@/components/img/sobretabela.png";
import img from "@/components/img/headertabela.jpg";

export default function Treino() {
  const [treino, setTreino] = useState([
    { dia: 'Segunda', treinos: [{ exercicio: '', repeticoes: '', peso: '', editando: false }] },
    { dia: 'Terça', treinos: [{ exercicio: '', repeticoes: '', peso: '', editando: false }] },
    { dia: 'Quarta', treinos: [{ exercicio: '', repeticoes: '', peso: '', editando: false }] },
    { dia: 'Quinta', treinos: [{ exercicio: '', repeticoes: '', peso: '', editando: false }] },
    { dia: 'Sexta', treinos: [{ exercicio: '', repeticoes: '', peso: '', editando: false }] },
  ]);

  const handleInputChangeTreino = (dia, index, campo, valor) => {
    setTreino((prevTreino) => {
      const novoTreino = prevTreino.map((item) =>
        item.dia === dia
          ? {
              ...item,
              treinos: item.treinos.map((treinoItem, treinoIndex) =>
                treinoIndex === index ? { ...treinoItem, [campo]: valor } : treinoItem
              ),
            }
          : item
      );
      return novoTreino;
    });
  };

  const toggleEdicaoTreino = (dia, index) => {
    setTreino((prevTreino) => {
      const novoTreino = prevTreino.map((item) =>
        item.dia === dia
          ? {
              ...item,
              treinos: item.treinos.map((treinoItem, treinoIndex) =>
                treinoIndex === index ? { ...treinoItem, editando: !treinoItem.editando } : treinoItem
              ),
            }
          : item
      );
      return novoTreino;
    });
  };

  const handleSalvarTreino = (dia, index) => {
    toggleEdicaoTreino(dia, index);
    // Aqui você pode enviar o treino para o servidor usando uma função de API
    console.log('Treino salvo:', treino);
  };

  const adicionarTreino = (dia) => {
    setTreino((prevTreino) => {
      const novoTreino = prevTreino.map((item) =>
        item.dia === dia
          ? { ...item, treinos: [...item.treinos, { exercicio: '', repeticoes: '', peso: '', editando: false }] }
          : item
      );
      return novoTreino;
    });
  };

  return (
    <>
      <Header />
      <section
        className="inicio container-fluid"
        id="inicio"
        style={{
          backgroundImage: `url(${img.src})`,
        }}
      >
        <div className="container">
          <h2>
            Tabela de treino
            <br /> sugerida para
          </h2>
          <h1>INICIANTES</h1>
          <a href="#informacoes">COMEÇAR AGORA</a>
        </div>
      </section>

      <main>
        <section className="container" id="sobre">
          <h1 className="h1-principal-laranja">SOBRE A TABELA DE TREINO</h1>
          <div className="row">
            <div className="col-6">
              <Image
                className="tabelasobre"
                src={sobree}
                width={400}
                height={300}
                alt="sobre"
              />
            </div>
            <div className="col-6 sobre-conteudo">
              <p>
                <span className="laranja">A Tabela </span>
                <span className="cinza-claro">de Treino</span> é uma ferramenta
                usada para planejar e organizar os exercícios, séries e
                repetições a serem realizados durante um programa de treinamento
                de musculação.
              </p>

              <p>
                Ela é projetada para ajudar os indivíduos a alcançarem seus
                objetivos de condicionamento físico, como ganho de força,
                hipertrofia muscular ou perda de gordura.
              </p>
            </div>
          </div>
        </section>

        <section className="container" id="treino">
          <h1 className="h1-principal-laranja">MINHA TABELA DE TREINO</h1>
          <form className="treino-form">
            <table className="treino-tabela">
              <thead>
                <tr>
                  <th>Dia</th>
                  <th>Exercício</th>
                  <th>Repetições</th>
                  <th>Peso</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {treino.map((item) => (
                  <React.Fragment key={item.dia}>
                    <tr className={`treino-dia ${item.editando ? 'editando' : ''}`}>
                      <td>{item.dia}</td>
                      <td colSpan="4">
                        {item.treinos.map((treinoItem, index) => (
                          <div key={index} className="treino-campos">
                            <label htmlFor={`${item.dia}-exercicio-${index}`}>Exercício:</label>
                            {treinoItem.editando ? (
                              <input
                                type="text"
                                id={`${item.dia}-exercicio-${index}`}
                                value={treinoItem.exercicio}
                                onChange={(e) =>
                                  handleInputChangeTreino(item.dia, index, 'exercicio', e.target.value)
                                }
                              />
                            ) : (
                              <span>{treinoItem.exercicio}</span>
                            )}

                            <label htmlFor={`${item.dia}-repeticoes-${index}`}>Repetições:</label>
                            {treinoItem.editando ? (
                              <input
                                type="text"
                                id={`${item.dia}-repeticoes-${index}`}
                                value={treinoItem.repeticoes}
                                onChange={(e) =>
                                  handleInputChangeTreino(item.dia, index, 'repeticoes', e.target.value)
                                }
                              />
                            ) : (
                              <span>{treinoItem.repeticoes}</span>
                            )}

                            <label htmlFor={`${item.dia}-peso-${index}`}>Peso:</label>
                            {treinoItem.editando ? (
                              <input
                                type="text"
                                id={`${item.dia}-peso-${index}`}
                                value={treinoItem.peso}
                                onChange={(e) =>
                                  handleInputChangeTreino(item.dia, index, 'peso', e.target.value)
                                }
                              />
                            ) : (
                              <span>{treinoItem.peso}</span>
                            )}

                            <div className="treino-botoes">
                              {treinoItem.editando ? (
                                <button type="button" onClick={() => handleSalvarTreino(item.dia, index)}>
                                  Salvar
                                </button>
                              ) : (
                                <button type="button" onClick={() => toggleEdicaoTreino(item.dia, index)}>
                                  Editar
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                        <div className="treino-botoes">
                          <button type="button" onClick={() => adicionarTreino(item.dia)}>
                            Adicionar Treino
                          </button>
                        </div>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}
