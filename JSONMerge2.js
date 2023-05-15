// @ts-nocheck
const students = [
  {
    id: 1,
    name: 'John',
    age: 20,
  },
  {
    id: 2,
    name: 'Jane',
    age: 22,
  },
  {
    id: 3,
    name: 'Alex',
    age: 21,
  },
];

const subjects = [
  {
    subjectId: 101,
    studentId: 1,
    subjectName: 'Math',
  },
  {
    subjectId: 102,
    studentId: 1,
    subjectName: 'Science',
  },
  {
    subjectId: 103,
    studentId: 1,
    subjectName: 'History',
  },
  {
    subjectId: 104,
    studentId: 2,
    subjectName: 'English',
  },
];

// const result = [
//   {
//     studentId: 1,
//     name: 'John',
//     subjects: [
//       {
//         subjectId: 101,
//         subjectName: 'Math',
//       },
//       {
//         subjectId: 102,
//         subjectName: 'Science',
//       },
//       {
//         subjectId: 103,
//         subjectName: 'History',
//       },
//     ],
//   },
//   {
//     studentId: 2,
//     name: 'Jane',
//     subjects: [
//       {
//         subjectId: 104,
//         subjectName: 'English',
//       },
//     ],
//   },
//   {
//     studentId: 3,
//     name: 'Alex',
//     subjects: [],
//   },
// ];

const result = students.map((student) => {
  const output = {
    studentId: student.id,
    name: student.name,
    subjects: [],
  };
  const studentFilter = subjects.filter((subjectFilter) => {
    if (student.id === subjectFilter.studentId) {
      output.subjects.push({
        subjectId: subjectFilter.subjectId,
        subjectName: subjectFilter.subjectName,
      });
      return true;
    }
    return false;
  });
  return output;
});
console.log(result);
