var frase = prompt("Porfavor ingrese la frase a analizar");
var nText = frase.length;
var i;

for (i = 0; i < frase.length; i++) 
{

   if (frase.substr(i,1) == "a" ||frase.substr(i,1) == "A" ) 
        {
          document.write(frase.substr(i,1));           
        }
     if(frase.substr(i,1) == "e" ||frase.substr(i,1) == "E")
        {
            document.write(frase.substr(i,1));
        }
     if(frase.substr(i,1) == "i" ||frase.substr(i,1) == "I")
        {
            document.write(frase.substr(i,1));
        }
     if(frase.substr(i,1) == "o" ||frase.substr(i,1) == "O")
        {
            document.write(frase.substr(i,1));
        }
     if(frase.substr(i,1) == "u" ||frase.substr(i,1) == "U")
        {
            document.write(frase.substr(i,1));
        }
    
}



