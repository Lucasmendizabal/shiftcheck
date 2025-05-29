import { useEffect, useState } from 'react'
import { listarTurnos } from './services/turnoService'

export default function HistoricoTurnos() {
  const [dados, setDados] = useState([])

  useEffect(() => {
    listarTurnos().then(setDados)
  }, [])

  return (
    <div>
      <h2>Histórico de Turnos</h2>
      {dados.length === 0 && <p>Nenhum turno registrado ainda.</p>}
      {dados.map((turno, i) => (
        <div key={i} style={{ borderBottom: '1px solid #ccc', marginBottom: '1rem' }}>
          <p><strong>Operador:</strong> {turno.operador}</p>
          <p><strong>Turno:</strong> {turno.turno}</p>
          <p><strong>Setor:</strong> {turno.setor}</p>
          <p><strong>Equipamentos:</strong> {turno.equipamentos}</p>
          <p><strong>Tipo de Falha:</strong> {turno.tipo_falha}</p>
          <p><strong>Ação Tomada:</strong> {turno.acao_tomada}</p>
          <p><strong>Sugestão IA:</strong> {turno.sugestao_ia}</p>
          <p><strong>Data:</strong> {new Date(turno.data).toLocaleString()}</p>
        </div>
      ))}
    </div>
  )
}
