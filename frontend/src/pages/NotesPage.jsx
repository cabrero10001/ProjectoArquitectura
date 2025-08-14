// src/modules/notes/pages/NotesPage.jsx
import React, { useState, useEffect } from 'react';
import NoteCard from '../components/NoteCard';
import NoteForm from '../components/NoteForm';
import { getNotes, createNote, updateNote, deleteNote } from '../services/noteService';

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const data = await getNotes();
      setNotes(data);
    } catch (error) {
      toast.error('No se pudieron cargar las notas.');
    }
  };

  const handleSave = async (note) => {
    try {
      if (note.id) {
        await updateNote(note.id, note);
        toast.success('Nota actualizada exitosamente!');
      } else {
        await createNote(note);
        toast.success('Nota creada exitosamente!');
      }
      fetchNotes();
    } catch (error) {
      toast.error('Error al guardar la nota.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      toast.success('Nota eliminada exitosamente!');
      fetchNotes();
    } catch (error) {
      toast.error('Error al eliminar la nota.');
    }
  };

  const handleEdit = (note) => {
    setNoteToEdit(note);
    setIsFormOpen(true);
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-Newake text-gray-800">Tus Notas</h1>
        <button
          onClick={() => {
            setNoteToEdit(null);
            setIsFormOpen(true);
          }}
          className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          + Crear Nota
        </button>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar notas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNotes.length > 0 ? (
          filteredNotes.map(note => (
            <NoteCard
              key={note.id}
              note={note}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">No hay notas que coincidan con la búsqueda.</p>
        )}
      </div>

      {isFormOpen && (
        <NoteForm
          noteToEdit={noteToEdit}
          onSubmit={handleSave}
          onCancel={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
};

export default NotesPage;