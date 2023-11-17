import React from "react";
import "@/components/css/Receitas.css";
import Header from "./Header";
import Footer from "./footer";
import img from "@/components/img/headeralimenta.jpeg";
import sobree from "@/components/img/alimentaçao.png";
import Image from "next/image";
import "@/components/menu2";
import crepioca from "@/components/img/crepioca.jpeg"

async function pegarRecitas() {
  const res = await fetch("http://localhost:5000/", {
    cache: "no-store",
  });
  

  const info = await res.json();
  return info;
}
export default async function Receitas() {
  const receitas = await pegarRecitas();

  return (
    <>
      <Header />
      <div>
        {/* Seção de Início */}
        <section
          className="inicio container-fluid"
          id="inicio"
          style={{
            backgroundImage: `url(${img.src})`,
          }}
        >
          <div className="container">
            <h2>
              Separamos algumas <br />
              Receitas para você ganhar
            </h2>
            <h1>MASSA MUSCULAR</h1>
            <a href="#informacoes">COMEÇAR AGORA</a>
          </div>
        </section>

        {/* Seção Sobre */}
        <main>
          <section className="container" id="sobre">
            <h1 className="h1-principal-laranja">
              ALIMENTAÇÃO E SUA IMPORTÂNCIA PARA QUEM TREINA
            </h1>
            <div className="row">
              <div className="col-6">
                <Image
                  className="alimenta"
                  src={sobree}
                  width={400}
                  height={300}
                  alt="sobre"
                />
              </div>
              <div className="col-6 sobre-conteudo">
                <p>
                  A alimentação desempenha um papel fundamental para aqueles que
                  praticam atividades físicas, especialmente para aqueles que se
                  dedicam à musculação e ao treinamento de força. Uma nutrição
                  adequada é essencial para melhorar o desempenho, promover a
                  recuperação muscular e alcançar os objetivos de
                  condicionamento físico
                </p>
                <p>
                  Com base nisso separamos algumas receitas para ajudar na sua
                  caminhada!
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Seção de Informações/Receitas */}
        <section className="container-fluid2" id="informacoes">
            <div className="container2">
            <h1 className="h1-principal-branco">RECEITAS</h1>
            </div>
            </section>
      
            
              
              
      
        {receitas.map((info, index) => (
          <section className="container-fluid" id="informacoes" key={index}>
            <div className="container">
              <div className="row">
                <div className="col-7">
                  <div className="card">
                  <Image
                      src={crepioca}
                      width={200}
                      height={200}
                      alt="crepioca"
                    />
                    <h1>{info.nome}</h1>
                    <p>{info.descricao}</p>
                    <h2>Ingredientes:</h2>
                    <p>{info.ingredientes}</p>
                    <h2>Modo de Preparo:</h2>
                    <p>{info.modoDePreparo}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </>
  );
}
