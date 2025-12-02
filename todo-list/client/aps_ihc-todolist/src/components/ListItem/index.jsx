import './style.css'

function ListItem({ nome, quantidade, valor, data }) {
  return (
    <li>
      <div className="list-item-container">
        <table className="table-item">
          <tbody>
            <tr>
              <th>{nome}</th>
              <th>{quantidade}</th>
              <th>{"R$ " + valor}</th>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="texto-data">{"Adicionado em " + data}</p>
    </li>
)
}

export default ListItem;