document.addEventListener('DOMContentLoaded', function () {

    function allClear()
    {
        console.log("AC")
    }

    function percent()
    {
        console.log("%")
    }

    function negation()
    {
        console.log("+/-")
    }

    function divide()
    {
        console.log("/")
    }

    function multiply()
    {
        console.log("*")
    }

    function add()
    {
        console.log("+")
    }

    function sub()
    {
        console.log("-")
    }

    function result()
    {
        console.log("=")
    }

    document.getElementById('AC').onclick = function () {allClear();}
    document.getElementById('%').onclick = function () {percent();}
    document.getElementById('+/-').onclick = function () {negation();}
    document.getElementById('/').onclick = function () {divide();}
    document.getElementById('*').onclick = function () {multiply();}
    document.getElementById('+').onclick = function () {add();}
    document.getElementById('-').onclick = function () {sub();}
    document.getElementById('=').onclick = function () {result();}

})
