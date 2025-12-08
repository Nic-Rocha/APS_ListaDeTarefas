import './style.css'

import { Link, useNavigate } from 'react-router-dom';

import AuthLayout from '../../layouts/AuthLayout'
import Form from '../../components/Form';
import { loginFields } from './loginFields';

import checklistImg from '../../assets/checklist-img.png'

const LoginIllustration = () => (
  <img src={checklistImg} className="login-image"/> 
);

const CriarContaText = () => (
  <p> Ainda não possui uma conta? <Link to='/register'>Crie uma conta</Link></p>
)

const IconUser = () => (
  <i className='auth-icon-user fa-classic fa-solid fa-circle-user'/>
)

function LoginPage() {

  // Hook para navegação programática.
  const navigate = useNavigate();

  /**
   * Processa a submissão do formulário de login.
   * @param {Object} data - Dados capturados pelo componente Form (email, password).
   */
  async function handleLoginSubmit(data) {

    /**
     * Validação básica de campos.
     * Verifica se os campos estão vazios.
     */
    if (!data || !data.email || !data.password) {
      alert("Por favor, preencha email e senha!");
      return; // Se estiver vazio, para aqui.
    }

    try {
      console.log("Enviando login...", data);

      /**
       * Requisição POST para autenticação na API
       * Espera pela resposta do servidor antes de enviar os dados.
       */
      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      // Tratamento de erro caso a API retorne status diferente de 200-299.
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Email ou senha incorretos");
      }
      
      // Guarda o token de autenticação para manter a sessão.
      const responseData = await response.json();
      console.log("Login OK! Token recebido:", responseData);

      localStorage.setItem('authToken', responseData.access_token);

      // Redirecionamento para a página principal.
      navigate('/listpage'); 

    } catch (error) {
      // Tratamento de erros
      console.error("Erro no login:", error);
      alert(error.message);
    }
  }

  // Renderização da página.
  return (
    
    <AuthLayout illustration={<LoginIllustration/>}>
      <IconUser/>
      <Form
        containerWrapper={"input"}
        formStyle={"login-form"}
        fields={loginFields}
        onSubmit={handleLoginSubmit}
        submitText="Entrar" 
        endText={<CriarContaText/>}
        buttomStyle={"button-login-register"}
      />
    </AuthLayout>
    
  )
}

export default LoginPage