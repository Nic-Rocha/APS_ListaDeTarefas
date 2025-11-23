import './style.css'

function Button(props) {

  const {text} = props

  return (
    <button type="submit"> {text} </button>
  )
}

export default Button
