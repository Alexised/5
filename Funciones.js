function bucle(){


var numeros;
var cont=0,cont1=0,cont2=0;
var x,y,z;

 
for (var i = 1; i <= 4; i++) {
	
	 x = parseInt(prompt("ingrese 1 lado "+i+" triangulo"))
	 y = parseInt(prompt("ingrese 2 lado "+i+"triangulo"))
	 z = parseInt(prompt("ingrese 3 lado "+i+" triangulo"))
	 if(x==y && y==z){
	 	cont=cont+1
document.write("<center>"+"<h2>" +"el triangulo es equilatero"+"<h2/>"+"</center>")
	 }else if (x==y || y==z || x==z) {
	 document.write("<center>"+"<h2>" +"el triangulo es isoceles "+"<h2/>"+"</center>")
	cont1=cont1+1
	 }else  {
	cont2=cont2+1
	document.write("<center>"+"<h2>" +"el triangulo es escaleno "+"<h2/>"+"</center>")
	 }
	 		

	}
document.write("<center>"+"<h2>" +"hay "+cont+"triangulos equilatero"+ "<h2/>"+"</center>")
document.write("<center>"+"<h2>" +"hay "+cont1+"triangulos isoceles"+ "<h2/>"+"</center>")
document.write("<center>"+"<h2>" +"hay "+cont2+"triangulos escaleno"+ "<h2/>"+"</center>")
if (cont<cont1&&cont<cont2) {
	document.write("<center>"+"<h2>" +"el triangulo de menor cantidad es equilatero"+ "<h2/>"+"</center>")

}else if (cont1<cont&&cont1<cont2) {
document.write("<center>"+"<h2>" +"el triangulo de menor cantidad es isoceles"+ "<h2/>"+"</center>")
}else{
document.write("<center>"+"<h2>" +"el triangulo de menor cantidad es escaleno"+ "<h2/>"+"</center>")
}
}
