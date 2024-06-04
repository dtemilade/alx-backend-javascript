

const countStudents1 = require('./3-read_file_async');

countStudents1("database.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });
console.log("After!");


const countStudents2 = require('./3-read_file_async');

countStudents2("nope.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });


const countStudents3 = require('./2-read_file');

countStudents3("database.csv");


const displayMessage = require('./0-console');

displayMessage("Hello NodeJS!");


const countStudents = require('./2-read_file');

countStudents("nope.csv");