// src/modules/notes/services/noteService.js
import axios from 'axios';

// ** ESPACIO PARA TUS ENDPOINTS **
// Define la URL base de tu API aquí
const API_BASE_URL = 'http://localhost:3000/api/';

/**
 * Obtiene todas las notas.
 * @returns {Promise<Array>} Un array de objetos de notas.
 */
export const getNotes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/notes`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error al obtener notas:', error);
    throw error;
  }
};

/**
 * Crea una nueva nota.
 * @param {Object} noteData - Datos de la nota a crear.
 * @returns {Promise<Object>} La nueva nota creada.
 */
export const createNote = async (noteData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/notes`, noteData);
    return response.data;
  } catch (error) {
    console.error('Error al crear nota:', error);
    throw error;
  }
};

/**
 * Actualiza una nota existente.
 * @param {string} id - ID de la nota a actualizar.
 * @param {Object} noteData - Datos de la nota a actualizar.
 * @returns {Promise<Object>} La nota actualizada.
 */
export const updateNote = async (id, noteData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/notes/${id}`, noteData);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar nota:', error);
    throw error;
  }
};

/**
 * Elimina una nota.
 * @param {string} id - ID de la nota a eliminar.
 * @returns {Promise<void>}
 */
export const deleteNote = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/notes/${id}`);
  } catch (error) {
    console.error('Error al eliminar nota:', error);
    throw error;
  }
};