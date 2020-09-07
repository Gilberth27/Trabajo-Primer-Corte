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
    if (frase.substr(i,1) == "a" ||frase.substr(i,1) == "A" ) 
        {
          
            x = x+1;            
        }
        else if(frase.substr(i,1) == "e" ||frase.substr(i,1) == "E")
        {
            y = y+1;  
        }
        else if(frase.substr(i,1) == "i" ||frase.substr(i,1) == "I")
        {
            z = z+1;
        }
        else if(frase.substr(i,1) == "o" ||frase.substr(i,1) == "O")
        {
            w = w+1;
        }
        else if(frase.substr(i,1) == "u" ||frase.substr(i,1) == "U")
        {
            v = v+1;
        }
}
document.write("la frase ingresada contiene " + v +" letras aA" ); 
document.write("<br/>la frase ingresada contiene " + w +" letras eE" );
document.write("<br/>la frase ingresada contiene " + x +" letras iI" );
document.write("<br/>la frase ingresada contiene " + y +" letras oO" );
document.write("<br/>la frase ingresada contiene " + z +" letras uU" );
