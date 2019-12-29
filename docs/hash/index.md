Hashing is a technique to speed up searching elements. Hashing use a Hash function to generate a key for each value before storing into an array. Collision maybe occur when hash function generate the same key for two or more value.

## Simple implementation
[include, lang: "javascript"](../sample-code/hash.js)

## Solve collision with separated chaining
[include](../sample-code/hash-separated-chaining.js)

## Solve collision with linear probing
[include](../sample-code/hash-linear-probing.js)
