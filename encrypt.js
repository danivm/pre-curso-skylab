  var txt=prompt("Introduce una palabra:");
  alert(encrypt(txt));
  
  function encrypt(txt) {
    var txtEnc='';
    var groups=3;
    var len=txt.length;
    for (x=0;x<groups;x++){
      var y=x;
      while (y<len) {
        txtEnc+=txt[y];
        y+=groups;
      }
    }

    var txtDec='';    
    groups=Math.ceil(len/3);
console.log(groups);
    for (x=0;x<groups;x++){
      y=x;     
      while (y<len) {
        txtDec+=txtEnc[y];
        y+=groups;
      }
    }
    var result=txt+" - "+txtEnc+" - "+txtDec;
    return result;    
  }
