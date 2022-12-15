// var
var a = localStorage.getItem("A");
a = parseFloat(a)

var b = localStorage.getItem("B");
b = parseFloat(b)

var c = localStorage.getItem("C");
c = parseFloat(c)


//delta

var d = b**2 - 4*a*c
d = Math.sqrt(d) //the the squared root
console.log(d) 

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

var res = window.document.getElementById("res")
var sa = window.document.querySelector("p#sa")
var sb = window.document.querySelector("p#sb")
var sc = window.document.querySelector("p#sc")
var xv = window.document.querySelector("p#xv")
var yv = window.document.querySelector("p#yv")
var except = document.querySelector("p#except")
var i = window.document.querySelector("div#imagem")
var img = window.document.createElement("img")
var expression = document.querySelector("p#ex")
console.log(a)
console.log(b)
console.log(c)
console.log(a + b)
window.addEventListener('load', results)

//show the expression

//if(a > 0 && b > 0 && c > 0)
//{
    
    
//}else if()

function results()
{
//result
if(isNaN(x1) && isNaN(x2))
{
    
    except.innerHTML = (`There is not a graph for this quadratic equation`)
    res.innerHTML = (`This is a complex root`)
    if(a>0 && b>0 && c>0 )
    {
    sa.innerHTML=(`a is positive, the graph has a <strong>concavity up</strong>`)
    sb.innerHTML=(`b is positive and a is positive, the vertex will be on quadrant 2 and the graph will cross the y axie <strong>increasing</strong>`)
    sc.innerHTML=(`c is positive, the graph will cross the y axie <strong>above</strong> the point 0`)
    xv.innerHTML=(`The value of Xv is <strong> ${Xv}</strong>`)
    yv.innerHTML=(`The value of Yv is <strong>${Yv}</strong>`)
    expression.innerHTML = (`Your quadratic function will look like: <i>${a}x² + ${b}x + ${c}</i>`)

    // a positivo b negativo c positivo
    }else if(a>0 && b<0 && c>0){
    sa.innerHTML=(`a is positive, the graph has a <i><strong>concavity up</strong></i>`)
    sb.innerHTML=(`b is negative and a is positive, the vertex will be on the quadrant 1 and the graph will cross the y axie <i>decreasing</i>`)
    sc.innerHTML=(`c is positive, the graph will cross the y axie <i><strong>above</strong></i> the point 0`)
    xv.innerHTML=(`The value of Xv is <i><strong> ${Xv}</strong></i>`)
    yv.innerHTML=(`The value of Yv is <i><strong>${Yv}</strong></i>`)
    expression.innerHTML = (`Your quadratic function will look like: <i>${a}x² ${b}x + ${c}</i>`)

    // a positive, b positive, c negative
    }else if(a>0 && b > 0 && c < 0)
    {
    sa.innerHTML=(`a is positive, the graph has a <i><strong>concavity up</strong></i>`)
    sb.innerHTML=(`b is positive and a is positive, the vertex will be on quadrant 3 and the graph will cross the axie y <i><strong>increasing</strong></i>`)
    sc.innerHTML=(`c is negative, the graph will cross the y axis <i><strong>below</strong></i> the point 0`)
    xv.innerHTML=(`The value of Xv is <i><strong> ${Xv}</strong></i>`)
    yv.innerHTML=(`The value of Yv is <i><strong>${Yv}</strong></i>`)
    expression.innerHTML = (`Your quadratic function will look like: <i>${a}x² + ${b}x ${c}</i>`)
    

    // a positive, b negative, c negative
    }else if(a>0 && b < 0 && c < 0)
    {
    sa.innerHTML=(`a is positive, the graph has a <i><strong>concavity up</strong></i>`)
    sb.innerHTML=(`b is negative and a is positive, the vertex will be on quadrant 3 and the graph will cross the axie y <i><strong>decreasing</strong></i>`)
    sc.innerHTML=(`c is negative, the graph will cross the y axis <i><strong>below</strong></i> the point 0`)
    xv.innerHTML=(`The value of Xv is <i><strong> ${Xv}</strong></i>`)
    yv.innerHTML=(`The value of Yv is <i><strong>${Yv}</strong></i>`)
    expression.innerHTML = (`Your quadratic function will look like: <i>${a}x² ${b}x ${c}</i>`)
    

    // a negative, b positive, c positive
    }else if(a < 0 && b > 0 && c > 0)
    {
    sa.innerHTML=(`a is negative, the graph has a <i><strong>concavity down</strong></i>`)
    sb.innerHTML=(`b is positive and a is negative, the vertex will be on quadrant 2 and the graph will cross the axie y <i><strong>incrising</strong></i>`)
    sc.innerHTML=(`c is positive, the graph will cross the y axis <i><strong>above</strong></i> the point 0`)
    xv.innerHTML=(`The value of Xv is <i><strong> ${Xv}</strong></i>`)
    yv.innerHTML=(`The value of Yv is <i><strong>${Yv}</strong></i>`)
    expression.innerHTML = (`Your quadratic function will look like: <i>${a}x² + ${b}x + ${c}</i>`)
    

    // a negative b negative c positive
    }else if(a < 0 && b < 0 && c > 0)
    {
    sa.innerHTML=(`a is negative, the graph has a <i><strong>concavity down</strong></i>`)
    sb.innerHTML=(`b is negative and a is negative, the vertex will be on quadrant 2 and the graph will cross the axie y <i><strong>decreasing</strong></i>`)
    sc.innerHTML=(`c is positive, the graph will cross the y axis <i><strong>above</strong></i> the point 0`)
    xv.innerHTML=(`The value of Xv is <i><strong>${Xv}</strong></i>`)
    yv.innerHTML=(`The value of Yv is <i><strong>${Yv}</strong></i>`)
    expression.innerHTML = (`Your quadratic function will look like: <i>${a}x² ${b}x + ${c}</i>`)
    

    // a negative, b positive, c negative
    }else if(a < 0 && b > 0 && c < 0)
    {
    sa.innerHTML=(`a is negative, the graph has a <i><strong>concavity down</strong></i>`)
    sb.innerHTML=(`b is positive and a is negative, the vertex will be on quadrant 4 and the graph will cross the axie y <i><strong>increasing</strong></i>`)
    sc.innerHTML=(`c is negative, the graph will cross the y axis <i><strong>below</strong></i> the point 0`)
    xv.innerHTML=(`The value of Xv is <i><strong> ${Xv}</strong></i>`)
    yv.innerHTML=(`The value of Yv is <i><strong>${Yv}</strong></i>`)
    expression.innerHTML = (`Your quadratic function will look like: <i>${a}x² + ${b}x ${c}</i>`)
    

    // a negative, b negative, c negative 
    }else if(a < 0 && b < 0 && c < 0)
    {
    sa.innerHTML=(`a is negative, the graph has a <i><strong>concavity down</strong></i>`)
    sb.innerHTML=(`b is negative and a is negative, the vertex will be on <i><strong>quadrant 3</strong></i> and the graph will cross the axie y <strong>decreasing</strong>`)
    sc.innerHTML=(`c is negative, the graph will cross the y axis <i><strong>below</strong></i> the point 0`)
    xv.innerHTML=(`The value of Xv is <i><strong> ${Xv}</strong></i>`)
    yv.innerHTML=(`The value of Yv is <i><strong>${Yv}</strong></i>`)
    expression.innerHTML = (`Your quadratic function will look like: <i>${a}x² ${b}x ${c}</i>`)
    }
    return 0;
}else
{if(x1 < x2)
{
    let X1 = x1.toFixed(2)
    let X2 = x2.toFixed(2)
    res.innerHTML=(`x1 é <i><strong>${X1}</strong></i> e x2 é <i><strong>${X2}</strong></i>`) 
}else if(x1 > x2)
{
    let X1 = x1.toFixed(2)
    let X2 = x2.toFixed(2)
    res.innerHTML=(`x1 é <i><strong>${X2}</strong></i> e x2 é <i><strong>${X1}</strong></i>`)
    
}   
}

// a positivo, b positivo c positivo
 if(a>0 && b>0 && c>0 )
 {
    sa.innerHTML=(`a is positive, the graph has a <i><strong>concavity up</strong></i>`)
    sb.innerHTML=(`b is positive and a is positive, the vertex will be on quadrant 3 and the graph will cross the y axie <i><strong>increasing</strong></i>`)
    sc.innerHTML=(`c is positive, the graph will cross the y axie <i><strong>above</strong></i> the point 0`)
    xv.innerHTML=(`The value of Xv is <i><strong> ${Xv}</strong></i>`)
    yv.innerHTML=(`The value of Yv is <i><strong>${Yv}</strong></i>`)
    i.innerHTML = ('<img src="../static/imagens/raiz negatica, a positivo, b positivo, c positivo.png" alt="graphic">')
    expression.innerHTML = (`Your quadratic function will look like: <i>${a}x² + ${b}x + ${c}</i>`)

    // a positivo b negativo c positivo
 }else if(a>0 && b<0 && c>0){
    sa.innerHTML=(`a is positive, the graph has a <i><strong>concavity up</strong></i>`)
    sb.innerHTML=(`b is negative and a is positive, the vertex will be on the quadrant 4 and the graph will cross the y axie <i><strong> decreasing</strong></i>`)
    sc.innerHTML=(`c is positive, the graph will cross the y axie <i><strong>above</strong></i> the point 0`)
    xv.innerHTML=(`The value of Xv is <i><strong> ${Xv}</strong></i>`)
    yv.innerHTML=(`The value of Yv is <i><strong>${Yv}</strong></i>`)
    i.innerHTML = ('<img src="../static/imagens/a positivo, b negativo, c positivo.png" alt="graphic">')
    expression.innerHTML = (`Your quadratic function will look like: <i>${a}x² ${b}x + ${c}</i>`)

    // a positive, b positive, c negative
 }else if(a>0 && b > 0 && c < 0)
 {
    sa.innerHTML=(`a is positive, the graph has a <strong>concavity up</strong>`)
    sb.innerHTML=(`b is positive and a is positive, the vertex will be on quadrant 3 and the graph will cross the axie y <i><strong>increasing</strong></i>`)
    sc.innerHTML=(`c is negative, the graph will cross the y axis <i><strong>below</strong></i> the point 0`)
    xv.innerHTML=(`The value of Xv is <i><strong> ${Xv}</strong></i>`)
    yv.innerHTML=(`The value of Yv is <i><strong>${Yv}</strong></i>`)
    i.innerHTML = ('<img src="../static/imagens/a positivo, b positivo, c negativo.png" alt="graph">')
    expression.innerHTML = (`Your quadratic function will look like: <i>${a}x² + ${b}x ${c}</i>`)

    // a positive, b negative, c negative
 }else if(a>0 && b < 0 && c < 0)
 {
    sa.innerHTML=(`a is positive, the graph has a <i><strong>concavity up</strong></i>`)
    sb.innerHTML=(`b is negative and a is positive, the vertex will be on quadrant 3 and the graph will cross the axie y <i><strong>decreasing</strong></i>`)
    sc.innerHTML=(`c is negative, the graph will cross the y axis <i><strong>below</strong></i> the point 0`)
    xv.innerHTML=(`The value of Xv is <i><strong> ${Xv}</strong></i>`)
    yv.innerHTML=(`The value of Yv is <i><strong>${Yv}</strong></i>`)
    i.innerHTML = ('<img src="../static/imagens/a positivo, b negativo, c negativo.png" alt="graph">')
    expression.innerHTML = (`Your quadratic function will look like: <i>${a}x² ${b}x ${c}</i>`)

    // a negative, b positive, c positive
 }else if(a < 0 && b > 0 && c > 0)
{
    sa.innerHTML=(`a is negative, the graph has a <i><strong>concavity down</strong></i>`)
    sb.innerHTML=(`b is positive and a is negative, the vertex will be on quadrant 1 and the graph will cross the axie y <i><strong>incrising</strong></i>`)
    sc.innerHTML=(`c is positive, the graph will cross the y axis <i><strong>above</strong></i> the point 0`)
    xv.innerHTML=(`The value of Xv is <i><strong> ${Xv}</strong></i>`)
    yv.innerHTML=(`The value of Yv is <i><strong>${Yv}</strong></i>`)
    i.innerHTML = ('<img src="../static/imagens/a negativo, b positivo, c positivo.png" alt="graph">')
    expression.innerHTML = (`Your quadratic function will look like: <i>${a}x² + ${b}x + ${c}</i>`)

    // a negative b negative c positive
}else if(a < 0 && b < 0 && c > 0)
{
    sa.innerHTML=(`a is negative, the graph has a <i><strong>concavity down</strong></i>`)
    sb.innerHTML=(`b is negative and a is negative, the vertex will be on quadrant 2 and the graph will cross the axie y <i><strong>decreasing</strong></i>`)
    sc.innerHTML=(`c is positive, the graph will cross the y axis <i><strong>above</strong></i> the point 0`)
    xv.innerHTML=(`The value of Xv is <i><strong>${Xv}</strong></i>`)
    yv.innerHTML=(`The value of Yv is <i><strong>${Yv}</strong></i>`)
    i.innerHTML = ('<img src="../static/imagens/a negative, b negative, c positive .png" alt="graph">')
    expression.innerHTML = (`Your quadratic function will look like: <i>${a}x² ${b}x + ${c}</i>`)

    // a negative, b positive, c negative
}else if(a < 0 && b > 0 && c < 0)
{
    sa.innerHTML=(`a is negative, the graph has a <i><strong>concavity down</strong></i>`)
    sb.innerHTML=(`b is positive and a is negative, the vertex will be on quadrant 1 and the graph will cross the axie y <i><strong>increasing</strong></i>`)
    sc.innerHTML=(`c is negative, the graph will cross the y axis <i><strong>below</strong></i> the point 0`)
    xv.innerHTML=(`The value of Xv is <i><strong> ${Xv}</strong></i>`)
    yv.innerHTML=(`The value of Yv is <i><strong>${Yv}</strong></i>`)
    i.innerHTML = ('<img src="../static/imagens/a negative, b positive, c negative.png" alt="graph">')
    expression.innerHTML = (`Your quadratic function will look like: <i>${a}x² + ${b}x ${c}</i>`)

    // a negative, b negative, c negative 
}else if(a < 0 && b < 0 && c < 0)
{
    sa.innerHTML=(`a is negative, the graph has a <i><strong>concavity down</strong></i>`)
    sb.innerHTML=(`b is negative and a is negative, the vertex will be on quadrant 2 and the graph will cross the axie y <i><strong>decreasing</strong></i>`)
    sc.innerHTML=(`c is negative, the graph will cross the y axis <i><strong>below</strong></i> the point 0`)
    xv.innerHTML=(`The value of Xv is <i><strong> ${Xv}</strong></i>`)
    yv.innerHTML=(`The value of Yv is <i><strong>${Yv}</strong></i>`)
    i.innerHTML = ('<img src="../static/imagens/a negative, b negative, c negative.png" alt="graph">')
    expression.innerHTML = (`Your quadratic function will look like: <i>${a}x² ${b}x ${c}</i>`)
} 
}