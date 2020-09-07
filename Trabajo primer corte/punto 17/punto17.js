let x = prompt("Por favor ingrese el número que desea analizar");
let j = 2;
while (x%j !== 0 && j < x/2 )
{
    j++;
}
if (x%j !== 0) 
    {
        alert('El número que acaba de ingresar es primo');
        
    }
     else 
    {
        alert('El número que acaba de ingresar no es primo');
       
    }