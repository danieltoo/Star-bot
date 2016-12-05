#include <Servo.h>
int option;

Servo servo1; 
int posicion;
int mota = 9; 
int motb = 10;
int vel = 1023;



void setup(){
  Serial.begin(9600);
  servo1.attach(2);
  pinMode(mota, OUTPUT);
  pinMode(motb, OUTPUT);
}
 
void loop(){
  if (Serial.available()>0){
    
    option=Serial.read();
    
    if(option=='a') { // Adelante 
      /*
        Funcion para mover servo adelante
      */
      int velocidad = map('9','0','9',0,255);
      analogWrite(mota, velocidad); 
      posicion = 510;
      posicion = map(posicion, 0, 1023, 180,0); 
      servo1.write(posicion);
      delay(150);
      Serial.println("A");
    }
    if(option=='b') { // Derecha
      /*
        Funcion para mover servo a la derecha
      */
        posicion = 100;            
 	posicion = map(posicion, 0, 1023, 180,0); 
 	servo1.write(posicion);                  // Escribimos la posicion con el mapa de valores al servo
        delay(150); 
      Serial.println("B");
    }
    if(option=='c') { // Izquierda
      /*
        Funcion para mover servo a la Izquierda
      */
      posicion = 700;            
      posicion = map(posicion, 0, 1023, 180,0);
      servo1.write(posicion);                  
      delay(150);
      Serial.println("C");
    }
    if(option=='d') { // Alto
      /*
        Funcion para mover servo a la 
      */
      int velocidad = map('0','0','9',0,255);
      analogWrite(mota, velocidad); 
      Serial.println("D");
    }
  }
}

/*
a.- Adelande 
b.- Derecha 
c.- Izquierda
d.- Alto

*/
