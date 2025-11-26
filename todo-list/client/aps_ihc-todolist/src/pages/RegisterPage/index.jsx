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
  return (
    <AuthLayout illustration={<RegisterIllustration/>}>
        <IconUser/>
        <Form fields={registerFields} submitText="Registrar"/>
    </AuthLayout>
  )
}

export default RegisterPage