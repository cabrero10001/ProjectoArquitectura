import React from 'react';
import { toast } from 'react-hot-toast';
import { motion } from "framer-motion";

const NoteCard = ({ note, onEdit, onDelete }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 cursor-pointer"
      whileHover={{ y: -5 }}
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-2 truncate">{note.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-4">{note.content}</p>
      <div className="flex justify-end space-x-2 mt-4">
        <button
          onClick={(e) => {
            e.stopPropagation(); // Evita que se dispare el evento del contenedor
            onEdit(note);
          }}
          className="bg-indigo-100 text-indigo-600 font-medium px-4 py-2 rounded-full text-sm hover:bg-indigo-200 transition-colors"
        >
          Editar
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(note.id);
          }}
          className="bg-red-100 text-red-600 font-medium px-4 py-2 rounded-full text-sm hover:bg-red-200 transition-colors"
        >
          Eliminar
        </button>
      </div>
    </motion.div>
  );
};

export default NoteCard;