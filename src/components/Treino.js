import "@/components/css/treino.css";
import React from "react";
import Header from "./Header";
import Footer from "./footer";
import "@/components/menu2";
import Image from "next/image";
import img from "@/components/img/headertreinopoo.jpg";
import sobre from "@/components/img/treino.png";
import Link from "next/link";

export default function treino() {
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
            Ajudamos você a<br />
            tirar dúvidas sobre
          </h2>
          <h1>Treinos</h1>
          <a href="#informacoes">COMEÇAR AGORA</a>
        </div>
      </section>

      <main>
        <section className="container" id="sobre">
          <h1 className="h1-principal-laranja">SOBRE O TREINO</h1>
          <div className="row">
            <div className="col-6">
              <Image
                className="treinosobre"
                src={sobre}
                width={300}
                height={350}
                alt="sobre"
              />
            </div>

            <div className="col-6 sobre-conteudo">
              <p>
                <span className="cinza-claro">O </span>
                <span className="laranja">Treino</span> de musculação é um
                programa de exercícios voltado para o desenvolvimento e
                fortalecimento dos músculos do corpo.
              </p>
              <p>
                Ele utiliza pesos, máquinas de musculação e exercícios com o
                peso corporal para criar resistência e estimular o crescimento
                muscular.
              </p>
            </div>
          </div>
        </section>
      


      <section class="container-fluid" id="informacoes">
          <div class="container">
            <h1 class="h1-principal-branco">QUAL TREINO VOCE DESEJA ACESSAR?</h1>

            <div class="row">
              <div class="col-6">
                <Link href="/peito" class="cardlink">
                  <div class="card">
                    <div className="icon">             
                    </div>
                    <h1 style={{ textAlign: "center",fontSize: "40px", }}>PEITO</h1>
                    <p style={{ textAlign: "center" }}>
                    Desenvolva um peito forte para benefícios físicos e visuais
                    </p>

              
                  </div>
                </Link>
              </div>
              <div class="col-6">
                <Link href="/costa" class="cardlink">
                  <div class="card">
                    <div className="icon">
                   
                      
                    </div>
                    <h1 style={{ textAlign: "center",fontSize: "40px", }}>COSTA</h1>
                    <p style={{ textAlign: "center" }}>
                    Fortaleça suas costas para benefícios funcionais e estéticos
                    </p>
                  </div>
                </Link>
              </div>
              <div class="col-6">
                <Link href="/biceps" class="cardlink">
                  
                  <div class="card">
                    <div className="icon">
              
                    </div>
                    <h1 style={{ textAlign: "center",fontSize: "40px", }}>BÍCEPS</h1>
                    <p style={{ textAlign: "center" }}>
                    Fortaleça seus bíceps para ganhos funcionais e visuais
                    </p>
                  </div>
                </Link>
              </div>
              <div class="col-6">
                <Link href="/triceps" class="cardlink">
                  <div class="card">
                    <span className="oi">
                   
                    </span>
                    <h1 style={{ textAlign: "center",fontSize: "40px", }}>TRÍCEPS</h1>
                    <p style={{ textAlign: "center" }}>
                    Fortaleça os tríceps para ganhos funcionais e visuais                    </p>
                  </div>
                </Link>
              </div>

              <div class="col-6">
                <Link href="/ombros" class="cardlink">
                  <div class="card">
                    <span className="oi">
                   
                    </span>
                    <h1 style={{ textAlign: "center",fontSize: "40px", }}>OMBROS</h1>
                    <p style={{ textAlign: "center" }}>
                    Fortaleça os ombros para benefícios visuais e funcionais
                    </p>
                  </div>
                </Link>
              </div>

              <div class="col-6">
                <Link href="/panturrilhas" class="cardlink">
                  <div class="card">
                    <span className="oi">
                   
                    </span>
                    <h1 style={{ textAlign: "center",fontSize: "40px", }}>PANTURRILHAS</h1>
                    <p style={{ textAlign: "center" }}>
                    Fortaleça as panturrilhas e essenciais para o suporte do corpo                    </p>
                  </div>
                </Link>
              </div>
              <div class="col-6">
                <Link href="/pernas" class="cardlink">
                  <div class="card">
                    <span className="oi">
                   
                    </span>
                    <h1 style={{ textAlign: "center",fontSize: "40px", }}>PERNAS</h1>
                    <p style={{ textAlign: "center" }}>
                    Fortaleça as pernas para benefícios funcionais e uma base sólida
                    </p>
                  </div>
                </Link>
              </div>

              <div class="col-6">
                <Link href="/gluteos" class="cardlink">
                  <div class="card">
                    <span className="oi">
                   
                    </span>
                    <h1 style={{ textAlign: "center",fontSize: "40px", }}>GLÚTEOS</h1>
                    <p style={{ textAlign: "center" }}>
                    Fortaleça os glúteos promove estabilidade e mobilidade
                    </p>
                  </div>
                </Link>
              </div>
              
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
