var frase = prompt("Porfavor ingrese la frase a analizar");
var nText = frase.length;
var i;
var x = 0; 

for (i = 0; i < frase.length; i++) 
{
    if (frase.substr(i,1) == "a" ||frase.substr(i,1) == "A" ) 
        {
          
            x = x+1;
        }
}
document.write("la frase ingresada contiene " + x +" letras aA" );