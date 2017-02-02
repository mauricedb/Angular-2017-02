/// import .\node_modules\@types\jquery\index.d.ts

// import $ from 'jquery';

$.ajax({

    url:'bla'
});


var inpX: HTMLInputElement = <HTMLInputElement>document.getElementById('x');
var inpY = <HTMLInputElement>document.getElementById('y');
var btnAdd = document.getElementById('add');
var btnSubtract = document.getElementById('subtract');
var preResult = document.getElementById('result');

btnAdd.addEventListener('click', add);
btnSubtract.addEventListener('click', subtract);

function add() {
    var x = +inpX.value;
    var y = +inpY.value;

    showResult(x + y);
}

function subtract() {
    var x = +inpX.value;
    var y = +inpY.value;

    showResult(x - y);
}


function showResult(result: number) {
    preResult.textContent = result.toString();

}



let xx = 1;

// xx = new Date()

 let zz = 1;

if (true ){
    var yy = 1;
    let zz = 2;

}


console.log(yy);
console.log(zz);



var data = [11,12,13,14];

data.forEach(function(i){
    console.log(i)
})


data.forEach(i => console.log(i));



function print(x){
    console.log(x)
}

data.forEach(print);

interface HasName{
    thename: string
}

class Animal implements Pet, Furry, HasName {
    constructor(public thename: string){

    }

    eat() {

    }

    stroke() {

    }

    brush(){}
}


interface Pet {
    stroke()
}

interface Furry {
    brush()
}

class Cat extends Animal{
    // private name: string;

    // constructor(name: string){
    //     this.name = name;
    // }

    constructor( name: string){
        super(name);
    }


    sleep() {

    }
}


const zorro = new Cat('Zorro');


console.log(zorro.thename);


class Person{
    thename = 'Ikke'
}

function printName(animal: HasName){

    console.log('animal.name',animal.thename)

}


// function printName(animal: {name:string}){

//     console.log('animal.name',animal.name)

// }

printName(zorro);
printName({thename: 'Unkown'})
printName(new Person());

// printName(undefined);


