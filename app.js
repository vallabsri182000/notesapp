const fs = require('fs');
const notes = require('./notes.js')
const yargs = require('yargs');
const argv = yargs.argv;

var title = argv.title;
var body = argv.body;
var command = argv._[0];

if (command == "add"){
    console.log("Adding Note...");
    notes.addingNote(title, body)
}
else if(command == 'remove'){
    console.log('Removing Note...');
    notes.removeNote(title);
}
else if(command == 'read'){
    console.log("Reading the note...");
    notes.readNote(title);
}
else if(command == 'list'){
    console.log('Listing all the notes...');
    notes.getAll();
}
else{
    console.log('Unknown Command...');
}