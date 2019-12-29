const studentNames = ["Bert", "Leanna", "Clinton", "Jaclyn", "Chelsey"];

function searchName(array, searchName) {
  const len = array.length;
  for (let index = 0; index < len; index++) {
    if (array[index] === searchName) {
      return index;
    }
  }

  return -1;
}

let pos = searchName(studentNames, 'Clinton');

if (pos > -1) {
  console.log("Clinton found at ", pos);
} else {
  console.log("Clinton not found");
}

pos = searchName(studentNames, 'unknown');

if (pos > -1) {
  console.log("unknown is found at ", pos);
} else {
  console.log("unknown is not found");
}
