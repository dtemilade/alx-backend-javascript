"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showStudent = void 0;
var Student1 = {
    firstName: 'Temilade',
    lastName: 'Dauda',
    age: 32,
    location: 'Lagos',
};
var Student2 = {
    firstName: 'Abiodun',
    lastName: 'Dauda',
    age: 29,
    location: 'Lagos',
};
var studentsList = [Student1, Student2];
var showStudent = function (students) {
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var headTr = document.createElement('tr');
    headTr.innerHTML = '<td>Name</td> <td>Location</td>';
    thead.appendChild(headTr);
    for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
        var student = students_1[_i];
        var bodyTr = document.createElement('tr');
        bodyTr.innerHTML = "<td>".concat(student.firstName, "</td> <td>").concat(student.location, "</td>");
        tbody.appendChild(bodyTr);
    }
    table.appendChild(thead);
    table.appendChild(tbody);
    document.body.appendChild(table);
};
exports.showStudent = showStudent;
(0, exports.showStudent)(studentsList);
document.title = 'Task 0';
