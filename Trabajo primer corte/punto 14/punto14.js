let x= parseInt(prompt('ingrese un  número'));
let v = x%2;
let w = x%3;
let y = x%5;
let z = x%7;

if (y == 0||z ==0||w ==0||v==0)
{
   if(y == 0)
   {
        document.write("El número ingresado es divisble por 5");
   }
   if (z== 0)
   {
        document.write("<br/>El número ingresado es divisble por 7");
   }
   if (w== 0)
   {
        document.write("<br/>El número ingresado es divisble por 3");
   }
   if (v== 0)
   {
        document.write("<br/>El número ingresado es divisble por 2");
   }
}
    else
    {
    document.write("<br/>El número ingresado no es divisible por ninguna de las opciones disponibles");
    }


