'use strict';

function replaceSubstring(string, words, substring) {
  // write code here
  const splitWords = words.split(' ');
  const splitString = string.split(' ');
  const splitSubstring = substring.split(' ');

  const startIndex = splitString.indexOf(splitWords[0]);

  const endIndex = splitString.indexOf(splitWords[1]);

  const firstHalfStrArr = splitString.slice(0, startIndex);

  const secondHalfStrArr = splitString.slice(endIndex, splitString.length);

  const concatArr = firstHalfStrArr.concat(splitWords[0],
    splitSubstring, secondHalfStrArr);

  const joinConcatArr = concatArr.join(' ');
  console.log(joinConcatArr);

  return joinConcatArr;
};
