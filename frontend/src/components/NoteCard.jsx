// src/modules/notes/components/NoteCard.jsx
import React from 'react';

const NoteCard = ({ note, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{note.title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{note.content}</p>
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => onEdit(note)}
          className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition-colors"
        >
          Editar
        </button>
        <button
          onClick={() => onDelete(note.id)}
          className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition-colors"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default NoteCard;