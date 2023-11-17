import React from "react";
import Header from "./Header";
import Footer from "./footer";
import "@/components/css/treino.css";
import "@/components/menu2";
import img from "@/components/img/costas.jpg"
import barra from "@/components/img/barrafixa.gif"
import Image from "next/image";


export default function costa() {
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
          <h1 className="h1-principal-laranja">SOBRE A COSTA</h1>
          <div className="row">
            
            
            <div className="col-6 sobre-conteudo">
              <p><span className="cinza-claro">O treino de</span><span className="laranja"> Costa </span>                   
                       
             oferece para além dos aspectos estéticos, um bom alicerce para 
                o desenvolvimento de outras musculaturas do corpo humano, assim como uma estabilidade 
                central capaz de previnir lesões e de aumentar a performace global do indíviduo nas tarefas do dia-a-dia. 
</p>
            </div>
          </div>
        </section>

        <section className="container-fluid" id="informacoes">
          <div className="container">
            <h1 className="h1-principal-branco" id="treino">Costa</h1>

            <div className="container">
              <div className="row">
                <div className="col-7">
                  <div className="card">
                
                     
                     <div className="divisao">
        <h2 className="nometreino" id="costa1">Barra fixa</h2>
        <Image
                 
                 src={barra}
                 width={400}
                 height={300}
                 alt="sobre"
               className="imagemr" />
               <h3>Como executar:</h3>
        <p className="parad">1 - Primeiramente você precisa de uma barra que esteja em uma altura suficiente para suspender o corpo.<br />
        2 - Segure-a com as mãos um pouco além da linha dos ombros.<br />3 - Levante os pés do chão e tente juntar as
         escápulas para ativar os músculos das costas.<br />4 - Fique assim pelo tempo que conseguir e, por fim, solte e pouse devagar.</p>
      </div>

      <div className="divisao">
        <h2 className="nometreino" id="costa2">Puxada com barra no pulley</h2>
        <img src="gif/costa/puxadacombarranopulley.gif" width="50%" className="imagemr" alt="imagasem peito" />
        <h3>Como executar:</h3>
        <p className="parad">
          1 - Primeiro, sente-se em uma máquina pulley, e ajuste o equipamento conforme a sua altura; <br />
          2 - Em seguida, segure a barra com uma pegada aberta, em uma distância maior que a largura dos ombros, com as mãos direcionadas para fora. Uma outra forma de executar o exercícios é segurar a barra na mesma largura dos ombros. <br />
          3 - Depois, com os braços estendidos na sua frente, leve o tronco para trás formando um ângulo em torno de 30º, ao mesmo tempo em que cria uma leve curvatura na região lombar e estufa o peito. <br />
          4 - Então, exale o ar e traga a barra para baixo, até que ela toque a parte superior do peito. Ao atingir a posição de contração total, comprima os músculos das costas. <br />
          5 - Lembre-se que o tronco deve ficar imóvel e somente os braços devem se mexer. O único esforço feito pelos antebraços é o de segurar a barra. <br />
          6 - Depois, segure a posição contraída por uma segundo, comprimindo as escápulas; <br />
          7 - Então, levante a barra lentamente à posição inicial, inalando o ar, até que os braços estejam totalmente estendidos e o latíssimo do dorso completamente alongado.
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