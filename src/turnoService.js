// src/services/turnoService.js
import { supabase } from '../supabaseClient'

export async function registrarTurno(turno) {
  const { error } = await supabase.from('turnos').insert([turno])
  return !error
}

export async function listarTurnos() {
  const { data, error } = await supabase.from('turnos').select('*').order('data', { ascending: false })
  return error ? [] : data
}
