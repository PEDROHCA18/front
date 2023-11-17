import React from "react";
import Header from "./Header";
import Footer from "./footer";
import "@/components/css/biotipo.css";
import img from "@/components/img/biotipo.jpg";
import endomorfo from "@/components/img/endomorfo-malhando.jpg";
import mesomorfo from "@/components/img/mesomorfo-malhando.webp";
import ectomorfo from "@/components/img/ectomorfo-malhando.webp";

import Image from "next/image";
import "@/components/menu2";

export default function Biotipo() {
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
            Venha conhecer <br />
            os diferentes tipos de
          </h2>
          <h1>BIOTIPO</h1>
          <a href="#informacoes">COMEÇAR AGORA</a>
        </div>
      </section>

      <main>
        <section className="container" id="sobre">
          <h1 className="h1-principal-laranja">O que é Biotipo?</h1>
          <div className="row">
            <div className="col-6">
              <img
                className="imagembiotipo"
                Image
                src={
                  "https://tutor.coz.br/wp-content/uploads/2023/01/depositphotos_251661160-stock-illustration-male-female-body-types-ectomorph.png"
                }
                width={400}
                height={300}
                alt="sobre"
              />
            </div>
            <div className="col-6 sobre-conteudo">
              <p>
                O biotipo corporal corresponde ao modelo de corpo, que é
                influenciado pela constituição óssea, metabolismo, massa
                muscular e quantidade de gordura. De acordo com essas
                características, é possível classificá-lo em: Ectomorfo,
                Endomorfo e Mesomorfo.
              </p>
              <p>
                Com base nisso, separamos algumas informações para você
                identificar seu biotipo e algumas dicas de como evoluir de
                acordo com o próprio.
              </p>
            </div>
          </div>
        </section>

        <section className="container-fluid" id="informacoes">
          <div className="container">
            <h1 className="h1-principal-branco">
              Tipos de biotipo e suas definições
            </h1>
            <div className="row">
              <div className="col-7">
                <div className="card">
                  <div className="card-content">
                    <Image
                      src={endomorfo}
                      width={200}
                      height={200}
                      alt="endormofo"
                    />
                    <h2>ENDOMORFO</h2>
                    <h3>Como identificar:</h3>
                    <p>
                      Os indivíduos endomorfos têm uma estrutura física mais
                      arredondada e geralmente carregam mais gordura corporal.
                      Eles tendem a ter uma cintura mais larga, quadris e coxas
                      mais cheios, além de uma maior tendência a ganhar peso.
                    </p>
                    <h3>Dicas de como evoluir:</h3>
                    <p>
                      1 - Nutrição: Concentre-se em uma dieta balanceada com
                      ênfase na ingestão de calorias controlada. Limite a
                      ingestão de gorduras saturadas e carboidratos simples.
                      Aumente a ingestão de fibras e proteínas magras.
                    </p>
                  </div>

                  <div className="card-content">
                    <Image
                      src={mesomorfo}
                      width={200}
                      height={200}
                      alt="mesoformo"
                    />
                    <h2>MESOMORFO</h2>
                    <h3>Como identificar:</h3>
                    <p>
                      Os mesomorfos têm uma estrutura física atlética e
                      musculosa. Eles tendem a ter ombros largos, cintura
                      estreita e uma facilidade natural para ganhar massa
                      muscular. Os mesomorfos geralmente têm níveis de gordura
                      corporal moderados.
                    </p>
                    <h3>Dicas de como evoluir:</h3>
                    <p>
                      1 - Nutrição: Mantenha uma dieta equilibrada, com
                      quantidade adequada de calorias para manter o peso
                      corporal ideal. Priorize a ingestão de proteínas magras e
                      carboidratos complexos.
                    </p>
                  </div>

                  <div className="card-content">
                    <Image
                      src={ectomorfo}
                      width={200}
                      height={200}
                      alt="ectomorfo"
                    />
                    <h2>ECTOMORFO</h2>
                    <h3>Como identificar:</h3>
                    <p>
                      Os indivíduos ectomorfos são geralmente caracterizados por
                      corpos mais magros, com estrutura óssea fina, ombros
                      estreitos, pouca gordura corporal e músculos menos
                      desenvolvidos. Eles podem ter dificuldade em ganhar peso e
                      massa muscular.
                    </p>
                    <h3>Dicas de como evoluir:</h3>
                    <p>
                      1 - Nutrição: Consuma uma quantidade adequada de calorias
                      para atender às necessidades de energia e promover o ganho
                      de massa muscular. Aumente a ingestão de proteínas para
                      auxiliar na recuperação muscular.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       
      </main>
  

   
     <Footer/>
     </>
  );
}
