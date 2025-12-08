import { useState } from 'react';

import './style.css'

/**
 * Componente de Formulário Reutilizável.
 * * Gera dinamicamente os campos e gerencia o estado interno com base
 * na prop 'fields'.
 *
 * @param {Object[]} fields - Array de objetos contendo as configurações dos campos (ex: name, label).
 * @param {Function} onSubmit - Função de callback executada ao submeter o formulário. Recebe os dados do form.
 * @param {string} [submitText="Enviar"] - Texto a ser exibido no botão de submit.
 * @param {Object} [buttomStyle] - Estilos customizados para o botão.
 * @param {Object} [formStyle] - Estilos customizados para o container do formulário.
 */

function Form({fields, onSubmit, endText, containerWrapper, submitText = "Enviar", buttomStyle, formStyle}) {

  // Inicialização Dinâmica do Estado:
  // Transforma o array de campos em um objeto chave-valor (ex: { nome: "", email: "" })
  // para garantir que os inputs sejam componentes controlados desde o início.
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
   * Previne o comportamento padrão de recarregar a página e repassa os dados.
   * @param {Event} e - Evento de submit.
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o refresh da página
    onSubmit(formData); // Propaga os dados capturados com o componente pai
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