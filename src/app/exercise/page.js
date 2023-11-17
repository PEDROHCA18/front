// pages/index.js
"use client"
import React, { useState } from 'react';
import Exercise from '@/components/exercise';
import "@/components/css/exercise.css"

const Home = () => {
  const [exercises, setExercises] = useState([
    { id: 1, name: 'Peito', image: '', instructions: '' },
    { id: 2, name: 'Bíceps', image: '', instructions: '' },
    { id: 3, name: 'Tríceps', image: '', instructions: '' },
    { id: 4, name: 'Panturrilha', image: '', instructions: '' },
    { id: 5, name: 'Costas', image: '', instructions: '' },
    { id: 6, name: 'Pernas', image: '', instructions: '' },
    { id: 7, name: 'Glúteos', image: '', instructions: '' },
    { id: 8, name: 'Ombros', image: '', instructions: '' },
  ]);

  const handleExerciseChange = (id, field, value) => {
    setExercises((prevExercises) =>
      prevExercises.map((exercise) =>
        exercise.id === id ? { ...exercise, [field]: value } : exercise
      )
    );
  };

  return (
    <div className={styles.container}>
      <h1>Formulário Dinâmico</h1>
      <form>
        {exercises.map((exercise) => (
          <div key={exercise.id} className={styles.exercise}>
            <Exercise exercise={exercise} onChange={handleExerciseChange} />
          </div>
        ))}
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Home;
