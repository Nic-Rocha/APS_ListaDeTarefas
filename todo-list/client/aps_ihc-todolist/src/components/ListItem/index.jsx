import './style.css'

function ListItem({ nome, quantidade, valor, data, concluido, onToggle }) {
  return (
    <li className={concluido ? 'item-concluido' : ''}>
      <div className="list-item-container">
        <table className="table-item">
          <tbody>
            <tr>

              <th>
                <input className="checkbox"
                  type="checkbox"
                  checked={concluido} 
                  onChange={onToggle}
                />
              </th>
              {}

              <th className="texto">{nome}</th>
              <th className="texto">{quantidade}</th>
              <th className="texto">{"R$ " + valor}</th>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="texto-data">{"Adicionado em " + data}</p>
    </li>
  );
}

export default ListItem;