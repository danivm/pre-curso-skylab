var arrayNames=[];
var finalNames=[];
var name='';
while (name != 'STOP') {
  name=prompt();
  if (name != 'STOP' && name !='') {
    arrayNames.push(name);
  }
}
arrayNames=arrayNames.sort();
arrayNames.reduce(function(a,b){ 
  if (finalNames[0] != a) {
    finalNames.push(a);
  }
  if (a=!b){
     finalNames.push(b);
  }  
  return b;
});
alert(finalNames.join());