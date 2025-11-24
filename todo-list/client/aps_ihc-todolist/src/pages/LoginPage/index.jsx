import './style.css'

import { Link } from 'react-router-dom';

import AuthLayout from '../../layouts/AuthLayout'
import Form from '../../components/Form';
import { loginFields } from './loginFields';

import checklistImg from '../../assets/checklist-img.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const LoginIllustration = () => (
  <img src={checklistImg} className="login-image"/> 
);

const CriarContaText = () => (
  <p> Ainda não possui uma conta? <Link to='/register'>Crie uma conta</Link></p>
)

const IconUser = () => (
  <FontAwesomeIcon icon={faCircleUser} className='auth-icon-user'/>
)

function LoginPage() {

  return (
    
    <AuthLayout illustration={<LoginIllustration/>}>
      <IconUser/>
      {/* TODO: Commitar Mudança no Botão */}
      <Form fields={loginFields} submitText="Entrar" endText={<CriarContaText/>}/>
    </AuthLayout>
    
  )
}

export default LoginPage