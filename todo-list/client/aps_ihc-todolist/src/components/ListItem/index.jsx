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

              {/* FUNÇÃO: Campo de seleção (o quadrado).
              * SERVE PARA: Marcar a tarefa como feita. */}
              <th>
                <input className="checkbox"
                  type="checkbox"
                  checked={concluido} 
                  onChange={onToggle}
                />
              </th>
            
              {/* FUNÇÃO: Células que exibem os dados de texto.
              SERVE PARA: Mostrar o conteúdo da tarefa. */}
              <th className="texto">{title}</th>
              <th className="texto">{description}</th>
              <th className="texto">{"Deadline:" + deadline}</th>
             
              {/* FUNÇÃO: Botão de ação (exclusão).
              * SERVE PARA: Chamar a função 'deleteFunction' para remover o item. */}
              <button 
                className='lixeira'
                onClick={deleteFunction}>
                <i class="fa-solid fa-trash-can"/>
              </button>
            </tr>
          </tbody>
        </table>
      </div>
      {/* FUNÇÃO: Parágrafo simples para data.
      * SERVE PARA: Exibir a data de criação. */}
      <p className="texto-data">{"Adicionado em " + data}</p>
    </li>
  );
}

export default ListItem;