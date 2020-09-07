var frase = prompt("Porfavor ingrese la frase a analizar");
var nText = frase.length;
var i;
var w = 0;
var x = 0;  
var v= 0;
var y = 0;
var z =0; 

for (i = 0; i < frase.length; i++) 
{
    if (frase.substr(i,1) == "a" ||frase.substr(i,1) == "A" || frase.substr(i,1) == "e" ||frase.substr(i,1) == "E"||frase.substr(i,1) == "i" ||frase.substr(i,1) == "I" ||frase.substr(i,1) == "o" ||frase.substr(i,1) == "O"||frase.substr(i,1) == "u" ||frase.substr(i,1) == "U" ) 
        {
          
            x = x+1;  
           // y = y+1;
            //z = z+1;  
           // w = w+1;
           // v = v+1;       
        }

}
document.write("la frase ingresada contiene " + x +" vocales" ); 
