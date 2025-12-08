import { useNavigate } from 'react-router-dom'

import AuthLayout from '../../layouts/AuthLayout'
import Form from '../../components/Form';
import { registerFields } from './registerFields'

import registerImg from '../../assets/signup-img.png'
import './style.css'

const RegisterIllustration = () => (
  <img src={registerImg} className="register-image"/> 
);

const IconUser = () => (
  <i className='auth-icon-user fa-classic fa-solid fa-circle-user'/>
)

function RegisterPage() {
  const navigate = useNavigate();

  /**
   * Envia os dados do novo usuário para criação de conta.
   * @param {Object} data - Dados preenchidos no formulário.
   */
  async function handleRegister(data) {

    /**
     * Validação básica de campos.
     * Verifica se os campos estão vazios.
     */
    if (!data.email || !data.password) {
      alert("Preencha todos os campos!");
      return;
    }

    try {

      /**
       * Requisição POST para autenticação na API
       * Espera pela resposta do servidor antes de enviar os dados.
       */
      const response = await fetch('http://localhost:8000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      // Tratamento de erros da API (ex: email já existe)
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Erro ao criar conta");
      }

      alert("Conta criada com sucesso! Agora faça login.");

      // Redireciona o usuário para a tela de login para autenticar
      navigate('/');

    } catch (error) {
      // Tratamento de erros
      console.error("Erro:", error);
      alert(error.message);
    }

    
  }
  
  // Renderizaçao da página
  return (
    <AuthLayout illustration={<RegisterIllustration/>}>

        <IconUser/>
        <Form
        containerWrapper={"input"}
        formStyle={"login-form"}
        buttomStyle={"button-login-register"}
        fields={registerFields} 
        onSubmit={handleRegister} 
        submitText="Registrar"
        />

    </AuthLayout>
  )
}

export default RegisterPage