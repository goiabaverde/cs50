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

var x1 = (-1*b - d)/(2*a)
var x2 = (-1*b + d)/(2*a)

if (c < 0) {
    x1 = (-1*b + d)/(2*a)
    x2 = (-1*b - d)/(2*a)
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

function calcQuadrant(xv, yv) {

    if (xv > 0 && yv > 0) {
        return 1
    } else if (xv > 0 && yv < 0) {
        return 4
    } else if (xv < 0 && yv < 0) {
        return 3
    } else {
        return 2
    }

}

function getSignalLabel(x) {

    return x > 0 ? `positive`: `negative`

}

function results() {

    let quadrant = calcQuadrant(Xv, Yv)
    let aSignalLabel = getSignalLabel(a)
    let bSignalLabel = getSignalLabel(b)
    let cSignalLabel = getSignalLabel(c)

    sa.innerHTML=(`a is ${aSignalLabel}, the graph has a <strong>concavity ${a > 0 ? `up`: `down`}</strong>`)
    sb.innerHTML=(`b is ${bSignalLabel} and a is  ${aSignalLabel}, the vertex will be on quadrant ${quadrant} and the graph will cross the y axis <strong>${b > 0 ? `increasing`: `negadecreasingtive`}</strong>`)
    sc.innerHTML=(`c is ${cSignalLabel}, the graph will cross the y axis <strong>${c > 0 ? `above`: `below`} </strong> the point 0`)
    xv.innerHTML=(`The value of Xv is <strong> ${Xv}</strong>`)
    yv.innerHTML=(`The value of Yv is <strong>${Yv}</strong>`)
    expression.innerHTML = (`Your quadratic function will look like: <i>${a}x² + ${b}x + ${c}</i>`)

        //result
    if (isNaN(x1) && isNaN(x2)) {
        
        except.innerHTML = (`There is not a graph for this quadratic equation`)
        res.innerHTML = (`This is a complex root`)

    } else {

        let X1 = x1.toFixed(2)
        let X2 = x2.toFixed(2)

        if (x1 < x2) {

            res.innerHTML=(`x1 é <i><strong>${X1}</strong></i> e x2 é <i><strong>${X2}</strong></i>`) 

        } else if (x1 > x2) {

            res.innerHTML=(`x1 é <i><strong>${X2}</strong></i> e x2 é <i><strong>${X1}</strong></i>`)
            
        }

        i.innerHTML = (`<img src="../static/imagens/a ${aSignalLabel}, b ${bSignalLabel}, c ${cSignalLabel}.png" alt="graphic">`)
    
    }

}
