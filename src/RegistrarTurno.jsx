import { useState } from 'react'
import { registrarTurno } from '../services/turnoService'

export default function RegistrarTurno() {
  const [form, setForm] = useState({
    operador: '',
    turno: '',
    setor: '',
    equipamentos: '',
    tipo_falha: '',
    acao_tomada: '',
    sugestao_ia: '',
    data: new Date().toISOString()
  })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const ok = await registrarTurno(form)
    if (ok) alert('Turno registrado com sucesso!')
    else alert('Erro ao salvar turno.')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro de Turno</h2>
      {['operador', 'turno', 'setor', 'equipamentos', 'tipo_falha', 'acao_tomada'].map(field => (
        <input
          key={field}
          name={field}
          placeholder={field}
          value={form[field]}
          onChange={handleChange}
          required
        />
      ))}
      <button type="submit">Salvar Turno</button>
    </form>
  )
}
