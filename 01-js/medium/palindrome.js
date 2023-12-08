/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function simplify(str){
  let ret=str;
  for(let i=0;i<str.length;i++){
    if (str[i]=="?" || str[i]=="," || str[i]==" " || str[i]=="!" || str[i]=="."){
      ret=ret.replace(str[i],"");
    }
  }
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
  return allToLowerCase(ret);
}

function isPalindrome(str) {
  let c=0;
  let xstr=simplify(str);
  for(let i=0;i<xstr.length;i++){
    if(xstr[i]==xstr[xstr.length-i-1]){
      c++;
    }
  }
  return c==xstr.length;

}

module.exports = isPalindrome;