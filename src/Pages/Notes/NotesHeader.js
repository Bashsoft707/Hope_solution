import React from "react";
import "./Notes.css";

const NotesHeader = ({ handleToggleDarkMode }) => {
  return (
    <div className="note-header">
      <h1>Notes</h1>
      <button
        onClick={() => handleToggleDarkMode((prevDarkMode) => !prevDarkMode)}
        className="save"
      >
        Toggle
      </button>
    </div>
  );
};

export default NotesHeader;
