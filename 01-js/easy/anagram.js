/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

const { all } = require("express/lib/application");

function allToLowerCase(str){
  x="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let res=str;
  for(let i=0;i<str.length;i++){
    for(let j=0;j<x.length;j++){
      if(str[i]==x[j]){
        res=res.replace(str[i],str[i].toLowerCase());
      }
    }
  }
  return res;
}

function isAnagram(str1, str2) {
  let c=0;
  let xstr1=allToLowerCase(str1);
  let xstr2=allToLowerCase(str2);
  for(let i=0;i<xstr1.length;i++){
    for(let j=0;j<xstr2.length;j++){
      if(xstr1[i]==xstr2[j]){
        c++;
        xstr2=xstr2.replace(xstr1[i],"`");
        continue;
      }
    }
  }
  return c==str1.length && c==str2.length;
}

module.exports = isAnagram;