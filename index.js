var express = require("express"); 
var exec = require('execSync').exec;
var app = express(); 

app.set('view engine', 'ejs');
app.use("/static",express.static('public'));


app.get("/", function (req,res) { 
	res.render("index");
});
app.get("/temp", function (req,res) { 
	res.render("indextemp");
});
app.get("/control", function (req,res) { 
	res.render("control");

});

app.get("/catche", function (req, res) {
	var msg =req.query.mensaje; 
	var status = false;
	console.log("REcibido");
	//****Respuestas con sonido
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

	else if (msg =="dime las tres leyes" || msg=="dime las leyes"){ //comando 2
		console.log("Ejecutando 2");
		var child = exec("mpg123 sounds/ley1.mp3");
		child = exec("mpg123 sounds/ley2.mp3");
		child = exec("mpg123 sounds/ley3.mp3");	
		status=true;
	}
	else if (msg =="Cómo te llamas" || msg=="Cuál es tu nombre"){ //comando 3
		console.log("Ejecutando 3");
		var child = exec("mpg123 sounds/nombre.mp3");
		status=true;
	}
	else if (msg =="cómo te crearon" || msg=="Cómo fuiste hecho" || msg=="como fuiste hecho"){ //comando 4
		console.log("Ejecutando 4");
		var child = exec("mpg123 sounds/hardware.mp3");
		child = exec("mpg123 sounds/software.mp3");
		status=true;
	}
	else if (msg =="cuál es tu misión"){ //comando 5
		console.log("Ejecutando 5");
		var child = exec("mpg123 sounds/mision.mp3");
		status=true;
	}
	// Acciones 
	else if (msg =="adelante"){ //comando adelante
		console.log("Ejecutando 6");
		var child = exec("python3 serialwww.py a");
		status=true;
	}
	else if (msg =="derecha" || msg =="derecho"){ //comando derecha
		console.log("Ejecutando 7");
		var child = exec("python3 serialwww.py b");
		status=true;
	}
	else if (msg =="izquierda"){ //comando izquierda
		console.log("Ejecutando 8");
		var child = exec("python3 serialwww.py c");
		status=true;
	}
	else if (msg =="alto"){ //comando alto
		console.log("Ejecutando 9");
		var child = exec("python3 serialwww.py d");
		status=true;
	}
	
	//extras 
	else if (msg =="procesa" || msg =="proceso"){ //procesa
		console.log("Ejecutando procesa");
		var child = exec("mpg123 sounds/R2-D2Procesing.mp3");
		status=true;
	}
	else if (msg =="confirma" || msg =="confirman"){ //confirma
		console.log("Ejecutando procesa");
		var child = exec("mpg123 sounds/R2D2-CONFIRM.mp3");
		status=true;
	}
	else if (msg =="estás alterado" || msg=="estás alterada"){ //confirma
		console.log("Ejecutando procesa");
		var child = exec("mpg123 sounds/R2-D2alterado.mp3");
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