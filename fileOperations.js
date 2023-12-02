import fs from "fs";

class FileOperations {
  static saveNotes(notes) {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJson);
  }

  static loadNotes() {
    try {
      const dataBuffer = fs.readFileSync("notes.json");
      const dataJson = dataBuffer.toString();
      return JSON.parse(dataJson);
    } catch (error) {
      return [];
    }
  }
}

export default FileOperations;
