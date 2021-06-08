function funcion() {
    let name=document.getElementById('fname').value
    if(name!=""){console.log(document.getElementById('fname').value)
    document.getElementById('pageOne').style.display = 'none'
    document.getElementById('pageTwo').style.display = 'block'
}
}
function funcion2() {
    let name=document.getElementById('fname').value
    if(name!=""){
        console.log(document.getElementById('fname').value)
    document.getElementById('pageTwo').style.display = 'none'
    document.getElementById('page3').style.display = 'block'
    }
}
function funcion3() {
    let name=document.getElementById('fname').value
    console.log('hola')
    if(name!=""){
        console.log(document.getElementById('fname').value)
    document.getElementById('page3').style.display = 'none'
    document.getElementById('page4').style.display = 'block'
    }
}
function pagefinal() {
//Calculo de resultados
let score=0
if((document.getElementById('Susana').checked)==true){
score++
}
if((document.getElementById('Ninguna de las anteriores').checked)==true){
    score++
}
if((document.getElementById('Ninguna de las anteriores').checked)==true){
    score++
}
console.log(score)
let on1 = ' aciertos'

document.getElementById('resultados').innerHTML= score +on1;

     //Cambio de página   
    document.getElementById('page4').style.display = 'none'
    document.getElementById('pagefinal').style.display = 'block'
}
function gaytorade() {
    alert("No seas cobarde, intentalo")
}