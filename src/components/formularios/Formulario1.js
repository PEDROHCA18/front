// components/Formulario.js
"use client"

// components/Formulario.js
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import logo from "@/components/img/login.jpg"

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    console.log(data);
  };

  return (
    <div className="form-container">
      <Image
                 
                 src={logo}
                 width={100}
                 height={100}
                 alt="sobre"
                 
                 layout="fixed" 
                 objectFit="cover"
               className="imagemr" />
      <h2>Formulário de Receita</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="imagemReceita">Imagem</label>
          <input
            {...register('imagemReceita', {
              required: 'Este campo é obrigatório',
            })}
            type="file"
            id="imagemReceita"
            accept="image/*"
          />
          {errors.imagemReceita && (
            <p className="error-message">{errors.imagemReceita.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="nomeReceita">Nome da Receita</label>
          <input
            {...register('nomeReceita', {
              required: 'Este campo é obrigatório',
            })}
            type="text"
            id="nomeReceita"
          />
          {errors.nomeReceita && (
            <p className="error-message">{errors.nomeReceita.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="descricaoReceita">Descrição</label>
          <textarea
            {...register('descricaoReceita', {
              required: 'Este campo é obrigatório',
            })}
            id="descricaoReceita"
          />
          {errors.descricaoReceita && (
            <p className="error-message">{errors.descricaoReceita.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="ingredientes">Ingredientes</label>
          <textarea
            {...register('ingredientes', {
              required: 'Este campo é obrigatório',
            })}
            id="ingredientes"
          />
          {errors.ingredientes && (
            <p className="error-message">{errors.ingredientes.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="modoPreparo">Modo de Preparo</label>
          <textarea
            {...register('modoPreparo', {
              required: 'Este campo é obrigatório',
            })}
            id="modoPreparo"
          />
          {errors.modoPreparo && (
            <p className="error-message">{errors.modoPreparo.message}</p>
          )}
        </div>

        <button type="submit">Enviar</button>
      </form>

      <style jsx>{`
        .form-container {
          max-width: 400px;
          margin: auto;
          padding: 20px;
          border: 2px solid orange;
          border-radius: 10px;
          background-color: white;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        h2 {
          color: orange;
          text-align: center;
        }

        .form-group {
          width: 100%;
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 5px;
          color: orange;
        }

        input,
        textarea,
        button {
          width: 100%;
          padding: 8px;
          margin-bottom: 10px;
          box-sizing: border-box;
        }

        .error-message {
          color: red;
          margin-top: 5px;
        }

        button {
          background-color: orange;
          color: white;
          padding: 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Formulario;
