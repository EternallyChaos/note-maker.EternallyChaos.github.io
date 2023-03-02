let clear = document.getElementById("clear-btn");
clear.addEventListener("click", () => {
  let NoteText = document.getElementById("note-field");
  let noteShow = document.getElementById("note-s");
  NoteText.value = "";
  noteShow.innerHTML = "";
  localStorage.clear();
});

let submit = document.getElementById("submit-btn");
submit.addEventListener("click", () => {
  let NoteText = document.getElementById("note-field");
  let noteArray = localStorage.getItem("Notes");

  if (noteArray == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(noteArray);
  }

  noteObj.push(NoteText.value);
  console.log(noteObj);
  localStorage.setItem("Notes", JSON.stringify(noteObj));

  NoteText.value = "";

  showNote();
});

function showNote() {
  let noteArray = localStorage.getItem("Notes");
  let noteShow = document.getElementById("note-s");
  if (noteArray == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(noteArray);
  }
  let divContent = "";

  noteObj.forEach((number, index) => {
    console.log(number);
    divContent += `<div>
                  <h3>Note: ${index + 1}</h3>
                  <p>${number}</p>
                  <button id="${index}" onClick="deleteNote(this.id)">Delete</button>
             </div>`;
  });
  noteShow.innerHTML = divContent;
}

function deleteNote(index) {
  let noteArray = localStorage.getItem("Notes");

  if (noteArray == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(noteArray);
  }
  noteObj.splice(index, 1);
  localStorage.setItem("Notes", JSON.stringify(noteObj));
  showNote();
}
