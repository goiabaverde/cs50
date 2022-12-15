    // objects to input
var bo = document.getElementById("bo")
bo.addEventListener('click', clicar)
function clicar()
{

    // values
var a = window.document.getElementById("a")
a = Number(a.value)
localStorage.setItem("A", a)

var b = window.document.getElementById("b")
b = Number(b.value)
localStorage.setItem("B", b)

var c = window.document.getElementById("c")
c = Number(c.value)
localStorage.setItem("C", c)

console.log(a)
console.log(b)
console.log(c)
if(a == 0 && b == 0 && c == 0) 
{ 
    window.alert("You must give values")
}
// delta
var d = b**2 - 4*a*c
//raiz
d = Math.sqrt(d) 
console.log(d)

// x1 e x2
if(c<0)
{
var x1 = (-1*b + d)/(2*a)
var x2 = (-1*b - d)/(2*a)
}
else
{
var x1 = (-1*b- d)/(2*a)
var x2 = (-1*b + d)/(2*a)    
}
console.log(x1)
console.log(x2)

//Vx
var Xv = (-1*b)/(2*a)
Xv = Xv.toFixed(2)
//Vy 
var e = b**2 - 4*a*c //delta
var Yv = (-1*e)/(4*a)
Yv = Yv.toFixed(2)

console.log(Xv)
console.log(Yv)

// checar

//imagens
}






    

    
