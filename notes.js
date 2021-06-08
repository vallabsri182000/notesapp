const fs = require('fs');

var fetchNotes = function(){
    try{
        return JSON.parse(fs.readFileSync('notes.txt'));
    }
    catch(err){
        return [];
    }
}
// ============= Adding Notes ============= //
var addingNote = function(title, body){
    var notes = fetchNotes();
    var note = {
        title, 
        body
    };
    fs.writeFileSync("notes.txt", JSON.stringify(notes));
    console.log(`${title} has been added.`);
}

// ============= Removing Notes ============= //
var removeNote = function(title){
    var notes = fetchNotes();

    var filteredNote = notes.filter((note)=> note.title !== title)
    fs.writeFileSync("notes.txt", JSON.stringify(filteredNote));
    console.log(`${title} has been removed.`)
}

// ============= Reading Note ============= //
var readNote = function(title){
    var notes = fetchNotes();
    var filterdNote = notes.filter((note) => note.title == title)
    console.log("Title:", filterdNote[0].title)
    console.log("Body:", filterdNote[0].body);
}

// ============= Reading Note ============= //
var getAll = function(){
    var notes = fetchNotes();
    notes.forEach(element => {
        console.log(`${notes.indexOf(element)+1}. ${element.title}`);
    });
}

module.exports = {
    addingNote,
    removeNote,
    readNote,
    getAll
};
