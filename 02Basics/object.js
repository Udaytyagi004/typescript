"use strict";
// syntax of object is similar in TS like the JS
Object.defineProperty(exports, "__esModule", { value: true });
var student1 = {
    name: "Uday",
    course: "B.Tech",
    Marks: 80
};
var student2 = {
    name: "Uday",
    course: "B.Tech",
    Marks: 80
};
/*********************************************************************************************************************** */
// Passing an object as parameter in a function
// Two correct ways of it:
// 1. Without destructuring (recommended for clarity):
function createUser1(user) {
    console.log(user.name, user.email, user.isPaid);
}
// 2. With destructuring (if you want direct access to fields):
function createUser2(_a) {
    var name = _a.name, email = _a.email, isPaid = _a.isPaid;
    console.log(name, email, isPaid);
}
