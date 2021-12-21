import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import "./Notes.css";

const NoteList = ({ notes, handleAddNote, handleDeleteNote, handleSearchNote }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
      <AddNote
        handleAddNote={handleAddNote}
        handleDeleteNote={handleDeleteNote}
        handleSearchNote={handleSearchNote}
      />
    </div>
  );
};

export default NoteList;
