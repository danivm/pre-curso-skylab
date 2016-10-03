var matrix=[];
var num=0;
for (x=0;x<3;x++){
	matrix[x]=[];
	for (y=0;y<5;y++){
		matrix[x][y]=0;
		matrix[x][y]=generateNum();
	}
}
var bingo=false;
var linea=false;

while (bingo==false) {
   	generateBall();
   	if (linea==false) {
    	isLinea();
    	if (linea==true) {
   			alert("LINEA!");
    	}
   	};
   	isBingo();
   	if(bingo==true){
   		alert("BINGO!");
   	}
}



function generateNum(){
	var valid=false;
	while(valid==false){
		num=Math.random();
		num=num*100;
		num=Math.round(num);
		if (num>0 && num<90) {
			valid=true;
			for (i=0;i<matrix.length;i++){
				if(matrix[i].indexOf(num)!= -1) {					
					valid=false;
				}
			}
		}
	}
	   
	return num;
}

function generateBall(){
	var valid=false;
	while(valid==false){
		num=Math.random();
		num=num*100;
		num=Math.round(num);
		if (num>0 && num<90) {
			for (i=0;i<matrix.length;i++){
				j=matrix[i].indexOf(num)
				if(j != -1) {
					matrix[i][j]='x';
					alert(matrix);	
					valid=true;				
				}
			}
		}
	}	   
}

function isBingo(){
	bingo=true;
	for (i=0;i<matrix.length;i++) {
		for (j=0;j<matrix[i].length;j++) {
			if (matrix[i][j]!='x') {
				bingo=false;
			}
		}		
	}
}

function isLinea(){	
	for (i=0;i<matrix.length;i++) {
		linea=true;
		for (j=0;j<matrix[i].length;j++) {
			if (matrix[i][j]!='x') {
				linea=false;
			}
		}
		if (linea==true) {
			break
		}	
	}
}