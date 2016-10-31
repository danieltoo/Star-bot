#!/usr/bin/python
import time
import serial
import sys
 

puertoArduino = serial.Serial('/dev/ttyACM0', 9600, timeout=1)
bandera = b'S'
if (sys.argv[1]=="a"):
	bandera = b'a'
elif (sys.argv[1]=="b"):
	bandera = b'b'
elif (sys.argv[1]=="c"):
	bandera = b'c'
elif (sys.argv[1]=="d"):
	bandera = b'd'

puertoArduino.write(bandera) 
puertoArduino.close()
