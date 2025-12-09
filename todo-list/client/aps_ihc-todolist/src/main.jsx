import './index.css'
import App from './App.jsx'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/**
 * Ponto de entrada da aplicação.
 * Inicializa a árvore de componentes e acopla a aplicação ao DOM do navegador.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* StrictMode ativa verificações e avisos adicionais */}
    <App />
  </StrictMode>
)
