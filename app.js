import inquirer from "inquirer";
import Notes from "./notes.js";

const notes = new Notes();

// Prompt the user for action selection
function promptAction() {
  return inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "Add a new note",
        "Remove a note",
        "List all notes",
        "Read a note",
        "Exit",
      ],
    },
  ]);
}

// Prompt the user for note details
function promptNoteDetails() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter note title:",
    },
    {
      type: "input",
      name: "body",
      message: "Enter note body:",
    },
  ]);
}

// Prompt the user for note title
function promptNoteTitle() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter note title:",
    },
  ]);
}

// Main function to handle user actions
async function main() {
  let exit = false;

  while (!exit) {
    const { action } = await promptAction();

    switch (action) {
      case "Add a new note":
        const { title, body } = await promptNoteDetails();
        notes.addNote(title, body);
        break;
      case "Remove a note":
        const { title: removeTitle } = await promptNoteTitle();
        notes.removeNote(removeTitle);
        break;
      case "List all notes":
        notes.listNotes();
        break;
      case "Read a note":
        const { title: readTitle } = await promptNoteTitle();
        notes.readNote(readTitle);
        break;
      case "Exit":
        exit = true;
        break;
    }
  }
}

main();
