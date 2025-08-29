

// syntax of object is similar in TS like the JS

const student1 ={
    name: "Uday",
    course: "B.Tech",
    Marks: 80
}

// TypeScript will automatically infer the type of student as:

// {
//   name: string;
//   course: string;
//   Marks: number;
// }

// If you want type safety (so that you don’t accidentally misspell a key or assign the wrong type), you should define a type or interface:

type Student = {
  name: string;
  course: string;
  Marks: number;
};

const student2: Student = {
  name: "Uday",
  course: "B.Tech",
  Marks: 80
};



/*********************************************************************************************************************** */

// Passing an object as parameter in a function

// Two correct ways of it:

// 1. Without destructuring (recommended for clarity):

function createUser1(user: { name: string; email: string; isPaid: boolean }) {
  console.log(user.name, user.email, user.isPaid);
}


// 2. With destructuring (if you want direct access to fields):

function createUser2({ name, email, isPaid }: { name: string; email: string; isPaid: boolean }) {
  console.log(name, email, isPaid);
}






export {}