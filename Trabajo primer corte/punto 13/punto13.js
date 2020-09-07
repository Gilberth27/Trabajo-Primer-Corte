let x= parseInt(prompt('ingrese un  número'));
let v = x%2;
let w = x%3;
let y = x%5;
let z = x%7;

if (y == 0||z ==0||w ==0||v==0)
{
    document.write("El número "+ x + " es divisible" );
}
else if(y == 1||z ==1||w ==1||v==1)
{
    document.write("El número "+ x + " no es divisible" );
}
