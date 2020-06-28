const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {

    const notes = loadNotes()

    const duplicate = notes.filter((note) => note.title === title);

    if (duplicate.length) {
        console.log(chalk.red.inverse("Note title Already taken"));
        return
    }

    const newNotes = [...notes, { title, body }];
    saveNotes(newNotes)
    console.log(chalk.green.inverse("Note Added!"));

}

const removeNote = (title) => {
    const notes = loadNotes()
    const newNotes = notes.filter((note) => note.title !== title)

    if (newNotes.length !== notes.length) {
        saveNotes(newNotes)
        console.log(chalk.green.inverse("Note Deleted!"));
    } else {
        console.log(chalk.red.inverse("Note not found!"));
    }
}


const loadNotes = () => {
    try {
        const notes = fs.readFileSync('notes.json');
        const notesJSON = JSON.parse(notes);
        return notesJSON;
    } catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    const data = JSON.stringify(notes)
    fs.writeFileSync('notes.json', data)
}

module.exports = {
    addNote, removeNote, saveNotes, loadNotes
}