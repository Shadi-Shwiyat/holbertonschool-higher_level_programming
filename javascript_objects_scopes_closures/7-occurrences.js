#!/usr/bin/node

exports.nbOccurences = function (list, searchElement) {
  let numOccurences = 0;
  for (let i = 0; i <= list.length; i++) {
    if (list[i] === searchElement) {
      numOccurences += 1;
    }
  }
  return (numOccurences);
};
