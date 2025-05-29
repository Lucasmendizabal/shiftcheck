import { useEffect, useState } from 'react'
import { listarTurnos } from '../services/turnoService'

export default function HistoricoTurnos() {
  const [registros, setRegistros] = useState([])

  useEffect(() => {
    async function carregarDados() {
      const dados = await listarTurnos()
      setRegistros(dados)
    }
    carregarDados()
  }, [])

  return (
    <div>
      <h2>Histórico de Turnos</h2>
      {registros.map((registro, i) => (
        <div key={i} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #ccc' }}>
          <p><strong>Operador:</strong> {registro.operador}</p>
          <p><strong>Turno:</strong> {registro.turno}</p>
          <p><strong>Setor:</strong> {registro.setor}</p>
          <p><strong>Equipamentos:</strong> {registro.equipamentos}</p>
          <p><strong>Tipo de Falha:</strong> {registro.tipo_falha}</p>
          <p><strong>Ação Tomada:</strong> {registro.acao_tomada}</p>
          <p><strong>Sugestão IA:</strong> {registro.sugestao_ia}</p>
          <p><strong>Data:</strong> {new Date(registro.data).toLocaleString()}</p>
        </div>
      ))}
    </div>
  )
}
