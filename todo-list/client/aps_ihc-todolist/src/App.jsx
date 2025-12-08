import './index.css'

import AppRoutes from './routes'

/**
 * Componente Raiz da Aplicação.
 * Serve como um container principal para o sistema de rotas.
 */

function App() {
  return (
    <>
      {/* Faz o controle de quem vai aparecer na tela */}
      <AppRoutes/>
    </>
  )
}

export default App