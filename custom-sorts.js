function ageSort(users) {
  // Your code here
  const usersSortedByAge = users.sort((a, b) => a.age - b.age);

  return usersSortedByAge;
}

function oddEvenSort(arr) {
  // Your code here
  const oddAndEvenSort = arr.sort((a, b) => {
    if (a % 2 === 0 && b % 2 !== 0) return 1;
    if (b % 2 === 0 && a % 2 !== 0) return -1;
    return a - b;
  });
  return oddAndEvenSort;
}

function validAnagrams(s, t) {
  let sSorted = s
    .split("")
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    .join("");
  let tSorted = t
    .split("")
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    .join("");
  return sSorted === tSorted;
}

function reverseBaseSort(arr) {
  const reversedBaseArr = arr.sort((a, b) => {
    if (a.toString().length > b.toString().length) return -1;
    if (a.toString().length < b.toString().length) return 1;
    return a - b;
  });

  return reversedBaseArr;
}

function frequencySort(arr) {
  const elementsByFrequency = arr.reduce((elementsFreObjCount, el) => {
    if (!elementsFreObjCount[el]) {
      elementsFreObjCount[el] = 1;
    } else {
      elementsFreObjCount[el]++;
    }
    return elementsFreObjCount;
  }, {});

  const arrElementsSortedByFrequency = arr.sort((a, b) => {
    if (elementsByFrequency[a] > elementsByFrequency[b]) return 1;
    if (elementsByFrequency[a] < elementsByFrequency[b]) return -1;
    return b - a;
  });
  return arrElementsSortedByFrequency;
}

// const arr4 = [11, 1, 101, 10, 100];
// const arr5 = [1, 45, 164, 6, 31, 90, 671];
// reverseBaseSort(arr4);
// reverseBaseSort(arr5);
// const users = [
//   {
//     id: 1,
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     occupation: "Software Engineer",
//     friends: [2, 3, 4],
//   },
//   {
//     id: 2,
//     firstName: "Jane",
//     lastName: "Doe",
//     age: 25,
//     occupation: "Data Scientist",
//     friends: [1, 4],
//   },
//   {
//     id: 3,
//     firstName: "Mary",
//     lastName: "Smith",
//     age: 32,
//     occupation: "UX Designer",
//     friends: [2, 4],
//   },
//   {
//     id: 4,
//     firstName: "James",
//     lastName: "Johnson",
//     age: 55,
//     occupation: "CTO",
//     friends: [1, 2, 3],
//   },
// ];
// let s = "anagram";
// let t = "nagaram";
// console.log(validAnagrams(s, t));
// console.log(ageSort(users));
// const arr1 = [5, 4, 7, 2, 9, 8, 1, 6, 3];
// const arr2 = [5, 8, 13, 6, 22, 14, 9];
// console.log(oddEvenSort(arr1));
// console.log(oddEvenSort(arr2));

// const arr7 = [1, 1, 2, 2, 2, 3];
// const arr8 = [2, 3, 1, 3, 2];
// const arr3 = [-1, 1, -6, 4, 5, -6, 1, 4, 1];

// frequencySort(arr7);
// frequencySort(arr8);
// frequencySort(arr3);
module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
