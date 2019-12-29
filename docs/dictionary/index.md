Dictionary is data structure which store data as key-value pairs.

In JavaScript except some primitive data types such as Number, Boolean, String,... everything remaining are objects
So in JavaScript we don't need to build Dictionary data structure instead we can use object as dictionary

Create dictionary:
```javascript
const phoneBook = {};
```

Add element to dictionary
```javascript
phoneBook['John D'] = '090xxxxx';
phoneBook['David T'] = '090xxxxx';
```

Remove element from dictionary
```javascript
delete phoneBook['Julia M'];
```

If we want to create a separated dictionary structure below is basic implementation. But it totally unnecessary in JavaScript
```javascript
class Dictionary {
  constructor() {
    this.dataStore = [];
  }

  add(key, value) {
    this.dataStore[key] = value;
  }

  remove(key) {
    delete this.dataStore[key];
  }

  clear(key) {
    this.dataStore = [];
  }
}
```
