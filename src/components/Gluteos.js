import React from "react";
import Header from "./Header";
import Footer from "./footer";
import "@/components/css/treino.css";
import "@/components/menu2";
import img from "@/components/img/gluteos.jpg";
import abducao from "@/components/img/abduçaodequadrisempenapolia.gif"
import Image from "next/image";


export default function gluteos() {
  return (
    <>
      <Header />
      
      <div>
      <section
        className="inicio container-fluid"
        id="inicio"
        style={{
          backgroundImage: `url(${img.src})`,
        }}
      >
        <div className="container">
          <h2>Ajudamos você a <br /> tirar dúvidas sobre</h2>
          <h1>MUSCULAÇÃO</h1>
          <a href="#informacoes">COMEÇAR AGORA</a>
        </div>
      </section>

      <main>
        
        <section className="container" id="sobre">
          <h1 className="h1-principal-laranja">SOBRE O GLÚTEOS</h1>
          <div className="row">
            
            
            <div className="col-6 sobre-conteudo">
              <p><span className="cinza-claro">O treino de </span><span className="laranja">Glúteos</span> Fortalecer
               e melhora a força da região do quadril, ajudando na estabilidade, mobilidade e desempenho atlético. Bem como, 
              glúteos fortes podem ajudar em atividades como correr, pular, subir escadas e levantar objetos pesados.</p>
            </div>
          </div>
        </section>

        <section className="container-fluid" id="informacoes">
          <div className="container">
            <h1 className="h1-principal-branco" id="treino">Glúteos</h1>

            <div className="container">
              <div className="row">
                <div className="col-7">
                  <div className="card">
                    
                  
                  <div className="divisao">
        <h2 className="nometreino" id="gluteo1">Abdução de quadril na polia</h2>
        <Image
                 
                 src={abducao}
                 width={400}
                 height={300}
                 alt="sobre"
               className="imagemr" /> 
        <h3>Como executar:</h3>
        <p className="parad">
          1 - Fique em pé ao lado da máquina com cabos e prenda o tornozelo direito no equipamento com um acessório específico para isso. Em seguida, apoie sua mão esquerda na estrutura mantendo o braço estendido. A mão direita pode ficar ao lado do corpo ou apoiada na cintura. <br />
          2 - Levante a perna direita lateralmente o mais alto que conseguir. Volte o pé para a posição inicial em um movimento lento e controlado para não soltar o peso todo de uma vez. Além disso, mantenha a perna esquerda no solo o tempo todo e tente não encostar o pé direito no chão durante a execução do exercício.
        </p>
      </div>

      <div className="divisao">
        <h2 className="nometreino" id="gluteo2">Agachamento sumo</h2>
        <img src="gif/gluteos/agachamentosumo.gif" width="50%" className="imagemr" alt="imagasem peito" />
        <h3>Como executar:</h3>
        <p className="parad">
          1 - Posicione-se corretamente com os pés afastados além da largura dos ombros e os dedos dos pés apontando para fora em um ângulo de 45 graus. <br />
          2 - Mantenha a postura correta, com as costas retas, peito aberto e olhar para frente. <br />
          3 - Flexione os joelhos e os quadris, descendo lentamente como se fosse se sentar em uma cadeira. Certifique-se de que os joelhos estejam alinhados com os pés. <br />
          4 - Mantenha a estabilidade com os joelhos afastados e o peso nos calcanhares. Mantenha o core contraído. <br />
          5 - Retorne à posição inicial empurrando-se pelos calcanhares, estendendo os quadris e os joelhos.
        </p>
      </div>
    </div>

                  
                  </div>
                </div>
              </div>
            </div>
          
        </section>
      </main>
    </div>
      
   
     <Footer/>
     </>
  );
}