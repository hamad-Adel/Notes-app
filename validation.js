const handleNoteValidation = note => {
  if (!note.value) {
    alert("please fill in the note's title");
    return false;
  } else return note.value.trim();
};
