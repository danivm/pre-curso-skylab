var rep=prompt('Cuantas sucesiones desea?');
alert(fibonacci(rep));

function fibonacci(rep) {
	if (rep<2) {
		alert('El mínimo de sucesiones son 2.');
	}
	var array=[0,1];
	var num=0;
	var ant1=1;
	var ant2=0;
	var cont=0;
	while (array.length<rep) {
		num=ant1+ant2;
		array.push(num);
		ant2=ant1;
		ant1=num;
	}
	return array;
}
