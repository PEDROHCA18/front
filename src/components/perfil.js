// pages/ProfilePage.js
"use client"

import React from 'react';
import Head from 'next/head';
import "@/components/css/perfil.css"
import HeaderAdmin from "./admin/HeaderAdmin";
import { Container } from 'react-bootstrap';

const ProfilePage = () => {
  return (
    <>
    <HeaderAdmin/>
    <div>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css" />
      </Head>
      < Container className="mt-5">
        <header className="perfil">
          <img className="perfil-foto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3qXo-egRk0EsjevEFP6xtXylb_J9onN40rwdfq0hOvgxMPy7Cv_UE6qHuLoPfHvNBkCM&usqp=CAU" />
          <div className="titulo">
            <h1>Equipe XYZ</h1>
            <h3>Estudante de Analise e Desenvolvimento de Sistemas</h3>
            <h3>IFPI</h3>
            
          </div>
        </header>

        <main className="projetos">
          <Container className="container-projetos">
            <h3>Projetos desenvolvidos</h3>
            <p className="texto-projetos">Nossos Projetos:</p>
            <ol>
              <li> </li>
              <li> 💪 Gym Academy</li>
              <li> 📚 Biblioteca</li>
              <li> 🗺️ Busca de cep</li>
              <li>👩‍❤️‍💋‍👨 Declaraçao de namoro</li>


            </ol>
        
          </Container>
        </main>
      </Container>
    </div>
    </>
  );
};

export default ProfilePage;
