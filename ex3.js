function LetterChanges(str) { 
  var lol='';
  var vocals=["a","e","i","o","u"];
  for(var x=0 ; x<str.length ; x++){
  	  var c = str.charAt(x); 
  	  var newChar=c;
  	  if((c >= 'a' && c <= 'z' ) || (c >= 'A' && c <= 'Z' )){
  	  	newChar=String.fromCharCode(str.charCodeAt(x)+1);
  	  	switch(c){
          case "z":
              newChar="a";
              break;
          case "Z":
              newChar="A";
              break;
        };
  	  };
      
      
      if (vocals.includes(newChar)){
          newChar=newChar.toUpperCase();
      }      
      lol+=newChar;
  }
  return lol;          
}
   
// keep this function call here 
console.log(LetterChanges("Argument goes here!*")); 
