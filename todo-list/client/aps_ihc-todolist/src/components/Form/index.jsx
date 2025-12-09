import { useState } from 'react';

import './style.css'

/**
 * Componente de Formulário Reutilizável.
 * * Gera dinamicamente os campos e gerencia o estado interno com base
 * na prop 'fields'.
 */

function Form({fields, onSubmit, endText, containerWrapper, submitText = "Enviar", buttomStyle, formStyle}) {

  // Inicialização Dinâmica:
  // Transforma o array de campos em um objeto para garantir que os inputs sejam componentes controlados desde o início.
  const initialData = fields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc
  }, {});

  // Hook de estado para gerenciar os valores dos inputs em tempo real
  const [formData, setFormData] = useState(initialData);

  /**
   * Manipula as alterações nos inputs.
   * Atualiza apenas o campo modificado preservando os demais dados do estado.
   * @param {Event} e - Evento de mudança do input.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  /**
   * Gerencia o envio do formulário.
   * Evita o comportamento padrão de recarregar a página e repassa os dados.
   * @param {Event} e - Evento de submit.
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o refresh da página
    onSubmit(formData); // Envia os dados capturados com o componente pai
  };


  /**
   * Render do Componente
   */
  return (
    <form className={formStyle} onSubmit={handleSubmit}>
      <div className={containerWrapper}>
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            <input id={field.name} name={field.name} type={field.type || 'text'} placeholder={field.placeholder} value={formData[field.name] || ""} onChange={handleChange}/>
          </div>

        ))}
      </div>
      <button className={buttomStyle} type="submit">{submitText}</button>
      {endText}
    </form>
  );
}

export default Form