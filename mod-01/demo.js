/// import .\node_modules\@types\jquery\index.d.ts
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// import $ from 'jquery';
$.ajax({
    url: 'bla'
});
var inpX = document.getElementById('x');
var inpY = document.getElementById('y');
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
function showResult(result) {
    preResult.textContent = result.toString();
}
var xx = 1;
// xx = new Date()
var zz = 1;
if (true) {
    var yy = 1;
    var zz_1 = 2;
}
console.log(yy);
console.log(zz);
var data = [11, 12, 13, 14];
data.forEach(function (i) {
    console.log(i);
});
data.forEach(function (i) { return console.log(i); });
function print(x) {
    console.log(x);
}
data.forEach(print);
var Animal = (function () {
    function Animal(thename) {
        this.thename = thename;
    }
    Animal.prototype.eat = function () {
    };
    Animal.prototype.stroke = function () {
    };
    Animal.prototype.brush = function () { };
    return Animal;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    // private name: string;
    // constructor(name: string){
    //     this.name = name;
    // }
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.sleep = function () {
    };
    return Cat;
}(Animal));
var zorro = new Cat('Zorro');
console.log(zorro.thename);
var Person = (function () {
    function Person() {
        this.thename = 'Ikke';
    }
    return Person;
}());
function printName(animal) {
    console.log('animal.name', animal.thename);
}
// function printName(animal: {name:string}){
//     console.log('animal.name',animal.name)
// }
printName(zorro);
printName({ thename: 'Unkown' });
printName(new Person());
// printName(undefined);
