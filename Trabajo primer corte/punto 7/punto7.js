var x= parseInt(prompt('ingrese un primer número'));
var y= parseInt(prompt('ingrese un segundo número'));
var z= parseInt(prompt('ingrese un tercer número'));
if(x>y && x>z)
{
    alert('El Numero Mayor es '+ x);
}
else if(y>x && y>z)
{
    alert('El numero mayor es '+ y); 
}
else if(z>x && z>y)
{
    alert('El número mayor es '+ z);
}
