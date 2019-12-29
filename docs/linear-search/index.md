In an application, we often do search specified value in a list. There are two ways to search, sequential search and binary search.
For unordered list, we use sequential search aka linear search.
It has constant time O(n)

## Basic implementation

```javascript
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

const pos = searchName(studentNames, 'Clinton');

if (pos > -1) {
  console.log("found at ", pos);
} else {
  console.log("not found");
}
```

<!-- js-console -->

## Use native api

```javascript
const studentNames = ["Bert", "Leanna", "Clinton", "Jaclyn", "Chelsey"];
const searchName = "Jaclyn";

const pos = studentNames.indexOf(searchName);

if (pos > -1) {
  console.log("found at ", index);
} else {
  console.log("not found");
}
```

<!-- js-console -->

With complex data structure

```javascript
const studentNames = [
  { id: 1577597581322, name: "Liza" },
  { id: 1577597581323, name: "Anahi" },
  { id: 1577597581323, name: "Else" },
  { id: 1577597581323, name: "Alfreda" },
  { id: 1577597581323, name: "Arnold" }
];
const searchName = "Jaclyn";

const pos = studentNames.findIndex((item) => (item.name === searchName));

if (pos > -1) {
  console.log("found at ", index);
} else {
  console.log("not found");
}
```

<!-- js-console -->
