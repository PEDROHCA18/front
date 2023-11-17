import "@/components/css/home.css";
import Header from "@/components/Header";
import Image from "next/image";
import homem from "@/components/img/homem.png";
import Footer from "@/components/footer";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import img from "public/header.jpg";
import { faChildReaching } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonRunning } from "@fortawesome/free-solid-svg-icons";
import "@/components/menu2";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <section
        className="inicio"
        id="inicio"
        style={{
          backgroundImage: `url(${img.src})`,
        }}
      >
        <div className="container">
          <h2>
            Ajudamos você a <br /> tirar dúvidas sobre
          </h2>

          <h1>MUSCULAÇÃO</h1>

          <a href="#informacoes">COMEÇAR AGORA</a>
        </div>
      </section>

      <main>
        <section class="container" id="sobre">
          <h1 class="h1-principal-laranja">SOBRE A GYM ACADEMY</h1>
          <div class="row">
            <div class="col-6">
              <Image
                className="img-treino"
                src={homem}
                width={300}
                height={300}
                alt="imagem de um homem segurando pesos"
              />
            </div>
            <div class="col-6 sobre-conteudo">
              <p>
                <span class="laranja">Gym </span>
                <span class="cinza-claro">Academy</span> é uma plataforma que
                tem como o principal objetivo ajudar você que possui dúvidas
                sobre o mundo da musculação.
              </p>

              <p>
                Disponibilizamos um conteúdo completo sobre Alimentação, Biotipo
                Corporal, Treinos e você ainda pode construir sua tabela de
                treino e personalizar ao seu gosto!
              </p>
            </div>
          </div>
        </section>

        <section class="container-fluid" id="informacoes">
          <div class="container">
            <h1 class="h1-principal-branco">QUAL INFORMAÇÃO DESEJA ACESSAR?</h1>

            <div class="row">
              <div class="col-6">
                <Link href="/receitas" class="cardlink">
                  <div class="card">
                    <div className="icon">
                      <FAIcon
                        icon={faUtensils}
                        style={{
                          textAlign: "center",
                          height: "70px",
                          width: "70px",
                        }}
                      />
                    </div>
                    <h1 style={{ textAlign: "center" }} className="titulo">
                      ALIMENTAÇÃO
                    </h1>

                    <p style={{ textAlign: "center" }}>
                      Dicas de alimentação para o ganho de massa muscular
                    </p>
                  </div>
                </Link>
              </div>
              <div class="col-6">
                <Link href="/biotipo" class="cardlink">
                  <div class="card">
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faChildReaching}
                        style={{
                          textAlign: "center",
                          height: "70px",
                          width: "70px",
                        }}
                      />
                    </div>
                    <h1 style={{ textAlign: "center" }}>BIOTIPO CORPORAL</h1>
                    <p style={{ textAlign: "center" }}>
                      Saiba quel é o seu biotipo corporal e suas cargas de
                      treino
                    </p>
                  </div>
                </Link>
              </div>
              <div class="col-6">
                <Link href="/treino" class="cardlink">
                  {" "}
                  <div class="card">
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faPersonRunning}
                        style={{
                          textAlign: "center",
                          height: "70px",
                          width: "70px",
                        }}
                      />
                    </div>
                    <h1 style={{ textAlign: "center" }}>TREINOS</h1>
                    <p style={{ textAlign: "center" }}>
                      Instruções de treino e Informações sobre os exercicios
                    </p>
                  </div>
                </Link>
              </div>
              <div class="col-6">
                <Link href="/tabela" class="cardlink">
                  <div class="card">
                    <span className="oi">
                      <FAIcon
                        icon={faTable}
                        style={{
                          height: "70px",
                          width: "70px",
                          marginLeft: "1px",
                        }}
                      />
                    </span>
                    <h1 style={{ textAlign: "center" }}>TABELA DE TREINO</h1>
                    <p style={{ textAlign: "center" }}>
                      Tabela de treino para iniciantes 
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <>
        <Footer />
      </>
    </>
  );
}
