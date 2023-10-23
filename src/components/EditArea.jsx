// EditArea.js

import React, { useState } from "react";

function EditArea(props) {
  const [editedTitle, setEditedTitle] = useState(props.title);
  const [editedContent, setEditedContent] = useState(props.content);

  const handleSave = () => {
    props.onSave(props.id, editedTitle, editedContent);
  };

  return (
    <div className="edit-area">
      <input
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
      />
      <textarea
        value={editedContent}
        onChange={(e) => setEditedContent(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default EditArea;
