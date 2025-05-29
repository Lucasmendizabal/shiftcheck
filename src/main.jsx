import React from 'react'
import ReactDOM from 'react-dom/client'
import RegistrarTurno from './RegistrarTurno.jsx' // ou o componente inicial do seu app
import './index.css' // se você tiver um arquivo de estilos

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RegistrarTurno />
  </React.StrictMode>,
)
