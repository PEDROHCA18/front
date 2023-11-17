"use client"
import HeaderAdmin from "./admin/HeaderAdmin";
import CardProgressos from "./admin/Progressao";
import CustomSelect from "./admin/Seelct";
import React, { useState } from 'react';
import "@/components/admin/css/progressao.css"

export default function Admin(){
    const [receita, setReceita] = useState({
    titulo: 'Crepioca',
    imagem: '@/components/img/crepioca.jpeg',
    descricao:
      'A crepioca é uma ótima opção para café da manhã ou um lanche da noite mais rápido. A massa conta com poucos ingredientes...',
    ingredientes: [
      '1 ovo',
      'Uma clara',
      'Duas colheres de sopa de goma de tapioca',
      'Uma pitada de sal',
    ],
    modoPreparo:
      'Primeiramente, junte todos os ingredientes em um recipiente e bata com a ajuda de um garfo. Em seguida, é só despejar a mistura...',
  });

  const handleEditar = () => {
    console.log('Editar receita');
  };

  const handleDeletar = () => {
    console.log('Deletar receita');
  };
  return(
    <section style={{backgroundColor:"white"}}>
  <HeaderAdmin/>
  <CardProgressos/>
  <CustomSelect/>

  <section className="container-fluid" id="informacoes" style={{
                          textAlign: "center",
                          marginTop: "10%",
                         
                        }}>
      <div className="container">
        <h1 className="h1-principal-branco">Receitas</h1>

        <div className="row">
          <div className="col-7">
            <div className="card" style={{
                          textAlign: "center",
                          alignItems: "center",
                         marginLeft: "28%",
                         width: "120%"
                        }}>
              <img src={receita.imagem} width="50%" alt={`imagem de ${receita.titulo}`} />
              <h1>{receita.titulo}</h1>
              <p>{receita.descricao}</p>
              <h2>Ingredientes:</h2>
              <ul>
                {receita.ingredientes.map((ingrediente, index) => (
                  <li key={index}>{ingrediente}</li>
                ))}
              </ul>
              <h2>Modo de Preparo:</h2>
              <p>{receita.modoPreparo}</p>
              <div>
                <button onClick={handleEditar}>Editar</button>
                <button onClick={handleDeletar}>Deletar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
  
  
  )
}