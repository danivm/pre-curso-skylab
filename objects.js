var student = { 
    name : "David Aughan", 
    class : "VI", 
    id : 12 
};

alert(showProperties(student,"student"));

student.class="XI";	

alert(showProperties(student,"student"));

delete student.id;

alert(showProperties(student,"student"));

alert(Object.keys(student).length);

student.city = "Barcelona";

alert(showProperties(student,"student"));

student.fullname = student.name;
delete student.name;

alert(showProperties(student,"student"));

var txt='Hello, my name is: '+student.fullname+'\n'+showProperties(student,"student");
alert(txt);

function showProperties(objeto, nombreObjeto) {
  var resultado = "";
  for (var i in objeto) {
    if (objeto.hasOwnProperty(i)) {
        resultado += nombreObjeto + "." + i + " = " + objeto[i] + "\n";
    }
  }
  return resultado;
}

