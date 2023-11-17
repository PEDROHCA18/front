import React from "react";
import Header from "./Header";
import Footer from "./footer";
import "@/components/css/treino.css";
import "@/components/menu2";
import img from "@/components/img/biceps.jpg"
import barra from "@/components/img/bicepsempecombarrareta.gif"
import Image from "next/image";

export default function Treinos() {
  
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
          <h1 className="h1-principal-laranja">SOBRE O BÍCEPS</h1>
          <div className="row">
            
            <div className="col-6 sobre-conteudo">
              <p><span className="cinza-claro">O treino de</span><span className="laranja"> Bíceps </span>                   
                       
              é importante para fortalecer e
                                 desenvolver os músculos dos braços. É recomendado variar
                                  as técnicas de treinamento, como o número 
                                de repetições e séries, ângulos e pegadas, e utilizar técnicas avançadas.
</p>
            </div>
          </div>
        </section>

        <section className="container-fluid" id="informacoes">
          <div className="container">
            <h1 className="h1-principal-branco" >Bíceps</h1>

            <div className="container">
              <div className="row">
                <div className="col-7">
                  <div className="card">
                
                     
                  <div className="divisao">
        <h2 className="nometreino" id="biceps1">Rosca bíceps direta com barra reta</h2>
        <Image
                 
                 src={barra}
                 width={400}
                 height={300}
                 alt="sobre"
               className="imagemr" />
        <h3>Como executar:</h3>
        <p className="parad">
          1 - Fique em pé com os pés afastados na largura dos ombros e segure a barra reta com as palmas voltadas para cima. <br />
          2 - Mantenha os braços estendidos ao longo do corpo e os cotovelos próximos às laterais. <br />
          3 - Flexione os cotovelos e levante a barra em direção ao peito, contraindo os músculos do bíceps. <br />
          4 - Pause brevemente no topo do movimento, quando a barra estiver próxima ao peito, para sentir a contração máxima do bíceps. <br />
          5 - Lentamente, abaixe a barra de volta à posição inicial, estendendo os cotovelos e alongando os músculos do bíceps. <br />
          6 - Execute o número desejado de repetições, respeitando sua capacidade e nível de treinamento.
        </p>
      </div>

      <div className="divisao">
        <h2 className="nometreino" id="biceps2">Rosca bíceps direta com barra W</h2>
        <img src="gif/biceps/bicepscombarraW.gif" width="50%" className="imagemr" alt="imagasem peito" />
        <h3>Como executar:</h3>
        <p className="parad">
          1 - Fique em pé com os pés afastados na largura dos ombros e segure a barra W com as mãos na largura dos ombros, palmas voltadas para cima. <br />
          2 - Mantenha os braços estendidos ao longo do corpo, mantendo os cotovelos próximos às laterais. <br />
          3 - Flexione os cotovelos e levante a barra em direção ao peito, contraindo os músculos do bíceps. <br />
          4 - Mantenha os pulsos em uma posição neutra e permita que a barra W siga a curva natural dos braços. <br />
          5 - Pause brevemente no topo do movimento, quando a barra estiver próxima ao peito, para sentir a contração máxima do bíceps. <br />
          6 - Lentamente, abaixe a barra de volta à posição inicial, estendendo os cotovelos e alongando os músculos do bíceps. <br />
          7 - Execute o número desejado de repetições, respeitando sua capacidade e nível de treinamento.
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