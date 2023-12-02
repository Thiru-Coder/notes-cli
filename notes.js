import chalk from "chalk";
import FileOperations from "./fileOperations.js";

class Notes {
  constructor() {
    this.logSuccess = chalk.green;
    this.logError = chalk.red;
    this.logWarning = chalk.hex("#FFA500");
    this.logTitle = chalk.bold.blue;
  }

  addNote(noteTitle, body) {
    const title = noteTitle.toLowerCase();
    const notes = FileOperations.loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (duplicateNote) {
      console.log(this.logError("Note Title already taken!"));
      return;
    }

    notes.push({ title, body });
    FileOperations.saveNotes(notes);
    console.log(this.logSuccess("New Note added successfully!"));
  }

  removeNote(noteTitle) {
    const title = noteTitle.toLowerCase();
    let notes = FileOperations.loadNotes();
    const filteredNotes = notes.filter((note) => note.title !== title);

    if (notes.length === filteredNotes.length) {
      console.log(this.logError("No Note Found!"));
      return;
    }

    FileOperations.saveNotes(filteredNotes);
    console.log(this.logSuccess("Note successfully deleted!"));
  }

  listNotes() {
    const notes = FileOperations.loadNotes();

    if (notes.length === 0) {
      console.log(this.logWarning("No Note Found to List!"));
      return;
    }

    console.log(this.logTitle("Your Notes:"));
    notes.forEach((note) => console.log(note.title));
  }

  readNote(noteTitle) {
    const title = noteTitle.toLowerCase();
    const notes = FileOperations.loadNotes();
    const note = notes.find((note) => note.title === title);

    if (!note) {
      console.log(this.logError("No Note Found!"));
      return;
    }

    console.log(this.logTitle(note.title));
    console.log(note.body);
  }
}

export default Notes;
