import './style.css'

function ListItem({ title, description, deadline, data, concluido, onToggle, deleteFunction }) {
  return (
        // ROPÓSITO: O contêiner principal de um item da lista. Usa a prop 'concluido' para aplicar o estilo de riscado.
    <li className={concluido ? 'item-concluido' : ''}>
      
      {/* PROPÓSITO: Agrupa o conteúdo da linha principal (checkbox, textos, botão). */}
      <div className="list-item-container">
        <table className="table-item">
          <tbody>
            <tr>
              <div>

                <div>
                  {/* FUNÇÃO: Campo de seleção (o quadrado).
                  SERVE PARA: Marcar a tarefa como feita. */}
                  <input className="checkbox"
                    type="checkbox"
                    checked={concluido} 
                    onChange={onToggle}
                  />
                  {/* FUNÇÃO: Células que exibem os dados de texto.
                  SERVE PARA: Mostrar o titulo da tarefa. */}
                  <th className="texto">{title}</th>
                </div>
                
                <button 
                  className='lixeira'
                  onClick={deleteFunction}>
                  <i class="fa-solid fa-trash-can"/>
                </button>
              </div>
              
            
              {/* FUNÇÃO: Células que exibem os dados de texto.
              SERVE PARA: Mostrar o descrição da tarefa. */}
              <th className="description">{description}</th>
            </tr>
          </tbody>
        </table>
      </div>

      
      <div className='list-item-bottom'>
        {/* FUNÇÃO: Parágrafo simples para data.
        * SERVE PARA: Exibir a data de criação. */}
        <p className="texto-data">{"Adicionado em " + data}</p>
        {/* FUNÇÃO: Botão de ação (exclusão).
        * SERVE PARA: Chamar a função 'deleteFunction' para remover o item. */}
        <th className="texto-data">{"Deadline: " + deadline}</th>
      </div>
    </li>
  );
}

export default ListItem;