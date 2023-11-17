"use client"
import { useForm } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';

const Formu= () => {
  const { register, handleSubmit } = useForm();

  const onDrop = (acceptedFiles) => {
    // Lógica para lidar com o upload da imagem
    console.log(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  const onSubmit = (data) => {
    // Lógica para enviar o formulário
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p>Arraste e solte uma imagem aqui, ou clique para selecionar</p>
      </div>
      <input {...register('nomeTreino')} placeholder="Nome do Treino" />
      <button type="submit">Enviar</button>

      <style jsx>{`
        .dropzone {
          border: 2px dashed orange;
          padding: 20px;
          text-align: center;
          cursor: pointer;
        }
      `}</style>
    </form>
  );
};

export default Formu;
