import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import EditArea from "./EditArea";

function App(props) {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingItem, setEditingItem] = useState(null);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function editNote(id) {
    setEditingItem(id);
  }

  function saveNote(id, editedTitle, editedContent) {
    setNotes((prevNotes) => {
      return prevNotes.map((noteItem, index) => {
        if (index === id) {
          return {
            title: editedTitle,
            content: editedContent
          };
        } else {
          return noteItem;
        }
      });
    });
    setEditingItem(null);
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <div key={index} className="note">
            {editingItem === index ? (
              <EditArea
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onSave={saveNote}
              />
            ) : (
              <Note
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={() => deleteNote(index)}
                onEdit={() => editNote(index)}
              />
            )}
          </div>
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
