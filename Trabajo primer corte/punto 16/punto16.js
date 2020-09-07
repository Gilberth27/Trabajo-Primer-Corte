let x = prompt("Por favor ingrese el primer número");
let y = prompt("Por favor ingrese el segundo número");
let divisor;
let i;

if (x < y) 
{
    divisor = x;
} 
else 
{
    divisor = y;
}



for (i=2;i <= divisor/2; i++) 
{
    if (x %i == 0 || y %i == 0) 
    {
        document.write(i,"<br/> ");
    }

}