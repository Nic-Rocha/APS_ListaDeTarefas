import './style.css'
import Button from '../Button'

function LoginForm() {

  return (
    <form className="login-form">

      <div className="input">
        <div>
          <label htmlFor="email">Seu endereço de e-mail</label>
          <input type="email" id="email" name="email" placeholder="EMAIL"/>
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" name="password" placeholder="SENHA"/>
        </div>
      </div>

      <Button text="LOGIN"/>

      <p> Ainda não possui uma conta? <a href="/registro">Crie uma conta</a></p>
    </form>
  )

}

export default LoginForm
