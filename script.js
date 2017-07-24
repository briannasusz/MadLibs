function myFunction() {
var zpnoun1 = document.getElementById('Hello').value;
var znoun = document.getElementById('Welcome').value;
var zunit = document.getElementById('Here').value;
var zpnoun2 = document.getElementById('Of').value;
var zpnoun3 = document.getElementById('Look').value;
var zverb = document.getElementById('Make').value;
var zbody = document.getElementById('Keep').value;
var zadj = document.getElementById('We').value;
var zsfg = document.getElementById('Bye').value;

var x = document.getElementById('story');
if (x.style.display == 'none') {
    x.style.display = 'block';
} else {
    x.style.display = 'none';
}
console.log(zpnoun1);

document.getElementById("pnoun1").innerHTML = zpnoun1;
document.getElementById("noun").innerHTML = znoun;
document.getElementById("unit").innerHYTML = zunit;
document.getElementById("pnoun2").innerHTML = zpnoun2;
document.getElementById("pnoun3").innerHTML = zpnoun3;
document.getElementById("verb").innerHTML = zverb;
document.getElementById("body").innerHTML = zbody;
document.getElementById("adj").innerHTML = zadj;
document.getElementById("sfg").innerHTML = zsfg;
}
