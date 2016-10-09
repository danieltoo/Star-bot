var express = require("express"); 
var exec = require('execSync').exec;
var app = express(); 

app.set('view engine', 'pug');
app.use("/static",express.static('public'));

app.get("/", function (req,res) { 
	res.render("index");

});

app.get("/catche", function (req, res) {
	var msg =req.query.mensaje; 
	var status = false;
	if (msg =="Hola" || msg=="hola"){ //comando 0
		console.log("Ejecutando 0");
		var command = 'mpg123 sounds/hola.mp3';
		var child = exec(command,function (error, stdout, stderr) {});
		status=true;
	}
	else if (msg =="Dime quién te creo" || msg=="dime quien te creo"){ //comando 1
		console.log("Ejecutando 1");
		var child = exec("mpg123 sounds/fui-creado-por.mp3");
		child = exec("mpg123 sounds/Aldana.mp3");
		child = exec("mpg123 sounds/camacho.mp3");
		child = exec("mpg123 sounds/lopez.mp3");
		child = exec("mpg123 sounds/molina.mp3");
		child = exec("mpg123 sounds/tecolote.mp3");
		child = exec("mpg123 sounds/y.mp3");
		child = exec("mpg123 sounds/torres.mp3");
		status=true;
	}
	else if (msg =="dime las leyes" || msg=="Dime las leyes"){ //comando 2
		console.log("Ejecutando 3");
		var child = exec("mpg123 sounds/ley1.mp3");
		child = exec("mpg123 sounds/ley2.mp3");
		child = exec("mpg123 sounds/ley3.mp3");	
		status=true;
	}
	else {
		var child = exec("mpg123 sounds/respuestas-limitadas.mp3");
	}
	
	res.header("Access-Control-Allow-Origin", "*");
	res.send({'status': status});

});

app.use (function (req, res) { 
 	res.render("page_not_found");
});

app.listen(3000); 

/*
0.-Hola (se enciende)
1.- Dime quien te creo (nosotros)  Dime quién te creo
2.- dime las leyes (las 3)  dime las tres leyes
3.- como te llamas (Starbot modelo xxxxxx)
4.- como te crearon (Las tecnologias que usamos)
5.- adios (se apaga)


6.- starbot adelante 
7.- starbot atras
8.- starbot izquierda 
9.- starbot derecha 
10.- starbot alto

11.- 
*/