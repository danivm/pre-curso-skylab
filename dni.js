var arrayDNI=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
var valid=false;
var DNI='';
var numDNI='';
var letra='';
while (valid==false) {
	DNI=prompt('Indique su DNI completo:');
	numDNI=DNI.substr(0,8);
	letra=DNI.substr(8,1);
	letra=letra.toUpperCase();
    valid=comprobarFormato();
	if (valid==true) {
		valid=comprobarLetra();
		if (valid==true) {
			alert('El DNI es correcto.');
		} else {
			alert('El DNI introducido no es correcto.');
		}
	} else {
		alert('El formato proporcionado no es válido.');
	}	
};

function comprobarFormato(){
	if (DNI.length=9 && numDNI >= 0 && numDNI <= 99999999 && letra >= 'A' && letra <='Z') {		
   		return true;
   	} else {
   		return false;
   	}
}

function comprobarLetra(){
	var mod=numDNI%23;
	letraOK=arrayDNI[mod];
	if (letra == letraOK){
		return true;
	} else {
		return false;
	}
}
