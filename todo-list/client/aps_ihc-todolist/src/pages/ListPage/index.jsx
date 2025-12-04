import './style.css'

import Form  from '../../components/Form'
import ListItem from '../../components/ListItem'

import { listFields } from './listFields'

function ListPage() {
  return (
      <div className='list-page-wrapper'>
        <div className='list-page-container'>
          <img className="gatinho" src="../../../src/assets/comprasgato.png" alt="compras_gato" />
          <Form containerWrapper={"input-container"}
                fields={listFields}
                submitText="Criar item"
                formStyle={"list-form"}
                buttomStyle={"button-item"}/>

          <div className="list-container">
            <h2 className='titulo-lista'>Lista de Compras</h2>
            <hr />
            <ul>

              <ListItem 
                
                nome={"Nome Produto"} 
                quantidade={"4"} 
                valor={"12,22"}
                data={"12/12/2025"}
              />
              <ListItem 
                nome={"Nome Produto"} 
                quantidade={"4"} 
                valor={"12,22"}
                data={"12/12/2025"}
              />
            </ul>
          </div>
        </div>
      </div>
  )
}

export default ListPage