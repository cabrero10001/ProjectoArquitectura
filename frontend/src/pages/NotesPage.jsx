import React, { useState, useEffect } from "react";
import NoteCard from "../components/NoteCard";
import NoteForm from "../components/NoteForm";
import {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} from "../services/noteService";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

// Instalar framer-motion: npm install framer-motion

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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
      toast.error("No se pudieron cargar las notas.");
    }
  };

  const handleSave = async (note) => {
    try {
      if (note.id) {
        await updateNote(note.id, note);
        toast.success("Nota actualizada exitosamente!");
      } else {
        await createNote(note);
        toast.success("Nota creada exitosamente!");
      }
      fetchNotes();
    } catch (error) {
      toast.error("Error al guardar la nota.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      toast.success("Nota eliminada exitosamente!");
      fetchNotes();
    } catch (error) {
      toast.error("Error al eliminar la nota.");
    }
  };

  const handleEdit = (note) => {
    setNoteToEdit(note);
    setIsFormOpen(true);
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-4xl md:text-5xl font-Newake text-gray-900 leading-tight mb-4 md:mb-0">
          Mis <span className="text-indigo-600">Notas</span>
        </h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Buscar notas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
          />
          <button
            onClick={() => {
              setNoteToEdit(null);
              setIsFormOpen(true);
            }}
            className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
          >
            + Crear Nota
          </button>
        </div>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <NoteCard
                note={note}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500 text-lg">
              No se encontraron notas. ¡Crea una nueva!
            </p>
          </div>
        )}
      </motion.div>

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
