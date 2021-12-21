import React from "react";
import { MdSearch } from "react-icons/md";
import "./Notes.css";

const SearchNote = ({ handleSearchNote }) => {
  return (
    <div className="search-note">
      <MdSearch className="search-note-icon" size="1.3em" />
      <input
        type="text"
        onChange={event => handleSearchNote(event.target.value)}
        placeholder="type to search"
      />
    </div>
  );
};

export default SearchNote;
