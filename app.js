// set up my filter
const filters = {
  searchByTitle: ""
};

// render notes on page load
renderNotes(notes, filters);

// render notes whenever user interact with it throw input-event
document.querySelector("#filter-notes").addEventListener("input", function(e) {
  filters.searchByTitle = e.target.value;
  renderNotes(notes, filters);
});

// handle form submission
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const title = handleNoteValidation(e.target.elements.note);
  if (title) {
    saveNote({ title, body: "static note body" });
  }
  renderNotes(notes, filters);
  e.target.elements.note.value = "";
});

// handle filter by dropdown
document.querySelector("#filter-by").addEventListener("change", e => {
  console.log(e.target.value);
});
