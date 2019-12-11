const getSavedNotes = () =>
  localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [];

const notes = getSavedNotes();

const saveNote = note => {
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));
};

// Generate the DOM structure for a note and append it
const generateNoteDOM = (note, appendTo) => {
  const notesDiv = document.createElement("div");
  const noteElement = document.createElement("span");
  const button = document.createElement("button");

  button.textContent = "X";
  noteElement.textContent = note.title;
  notesDiv.appendChild(noteElement);
  notesDiv.appendChild(button);

  document.querySelector(appendTo).appendChild(notesDiv);
};

// render my notes
const renderNotes = (notes, filters) => {
  const renderedNotes = notes.filter(note =>
    note.title.toLowerCase().includes(filters.searchByTitle.toLowerCase())
  );
  // clear the notes-box div
  document.querySelector("#notes-box").innerHTML = "";
  // rendered notes to the DOM
  renderedNotes.forEach(note => generateNoteDOM(note, "#notes-box"));
};
