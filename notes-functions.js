// let notes = [];
// const savedNotes = localStorage.getItem("notes");
// if (savedNotes) {
//   notes = JSON.parse(savedNotes);
// }

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
const generateNoteDomAndAppend = (note, appendTo) => {
  const noteElement = document.createElement("p");
  noteElement.textContent = note.title;
  noteElement.classList.add("note");
  document.querySelector(appendTo).appendChild(noteElement);
};

// render my notes
const renderNotes = (notes, filters) => {
  const renderedNotes = notes.filter(note =>
    note.title.toLowerCase().includes(filters.searchByTitle.toLowerCase())
  );
  // clear the notes-box div
  document.querySelector("#notes-box").innerHTML = "";
  // rendered notes to the DOM
  renderedNotes.forEach(note => generateNoteDomAndAppend(note, "#notes-box"));
};
