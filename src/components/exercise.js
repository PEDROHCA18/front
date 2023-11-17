
// components/Exercise.js
"use client"
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const Exercise = ({ exercise, onChange }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        onChange(exercise.id, 'image', e.target.result);
      };

      reader.readAsDataURL(file);
    },
    [exercise.id, onChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop,
  });

  return (
    <div>
      <h3>{exercise.name}</h3>
      <label>
        Nome do Exercício:
        <input
          type="text"
          name={`name-${exercise.id}`}
          value={exercise.name}
          onChange={(e) => onChange(exercise.id, 'name', e.target.value)}
        />
      </label>
      <div {...getRootProps()} style={{ marginTop: '10px', marginBottom: '10px' }}>
        <input {...getInputProps()} />
        <p>Arraste e solte uma imagem aqui ou clique para selecionar</p>
      </div>
      {exercise.image && (
        <div>
          <p>Imagem do Exercício:</p>
          <img
            src={exercise.image}
            alt={`Imagem de ${exercise.name}`}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      )}
      <label>
        Como Executar:
        <textarea
          name={`instructions-${exercise.id}`}
          value={exercise.instructions}
          onChange={(e) => onChange(exercise.id, 'instructions', e.target.value)}
        />
      </label>
    </div>
  );
};

export default Exercise;
