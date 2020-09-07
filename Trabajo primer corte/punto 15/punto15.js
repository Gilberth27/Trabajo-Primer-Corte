let x = prompt("Por favor ingrese un número");
let i;

for (i=2;i <= x/2; i++) 
{
    if (x %i == 0) 
    {
        document.write(i,"<br/> ");
    }

}
