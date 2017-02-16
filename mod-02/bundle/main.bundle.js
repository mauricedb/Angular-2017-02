/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// import {print} from './utils'
// import Paard from './horse';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// new Paard();
// print('Hello');
// function addProps(target) {
//     target.prototype.x = 1;
// }
// class RootCat{
//     // species: 'cat';
// }
// class Siamees extends RootCat {
//     species: 'cat';
//      sleep1(){
//     }
//     eat(){}
// }
// class EK {
//     species: 'cat';
//      sleep2(){
//     }
//     eat(){}
// }
// type Cat = Siamees|EK;
// function log(msg){
//     return function(target:any, name:string){
//     // console.log('name', name)
//         const fn = target[name];
//         target[name] = function() {
//             console.log('Calling',msg, name)
//             fn.call(this);
//         }
//         return target;
//     }
// }
// @addProps
// class Dog {
//     species: 'dog';
//     @log('THis is a dog')
//      eat() {
//         console.log('X = ', (<any>this).x)
//     }
// }
// type Pet = Cat|Dog|null;
// function doStuff(pet: Pet){
// if (pet instanceof Siamees){
//     pet.sleep1();
// }
// switch (pet.species){
//     case 'dog':
//     pet.eat()
//     break;
//     case 'cat':
//     pet.eat();
//     break;
//     // case 'bird':
//     // break;
// }
// }
// doStuff(new Siamees())
// doStuff(new Dog())
// // doStuff('')
// new Dog().eat();
function doStuff(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(new Date()), x * 5000);
    });
}
function start() {
    doStuff(1).then((x) => console.log(x));
    doStuff(2).then((x) => console.log(x));
}
function start2() {
    return __awaiter(this, void 0, void 0, function* () {
        var x1 = yield doStuff(1);
        var x2 = yield doStuff(2);
        console.log(x1);
        console.log(x2);
    });
}
function start3() {
    return __awaiter(this, void 0, void 0, function* () {
        var x1 = doStuff(1);
        var x2 = doStuff(2);
        x2 = yield x2;
        x1 = yield x1;
        console.log(x1);
        console.log(x2);
    });
}
start3();
class Cat {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name);
    }
    add(x, y) {
        return x + y;
    }
    subtract(x, y) {
        return x - y;
    }
}
var zorro = new Cat('Zorro');
var sum = zorro.add(1, 2);
zorro.subtract(1, 2);
var o = {
    name: 'Maurice',
    fn: function (x) {
        console.log(this.name);
    }
};
o.fn(1);
function print(cat) {
    console.log(cat);
    // if (cat){
    //   console.log(cat.name);
    // }
}
print(zorro);
// print(null);
// zorro=null;
zorro = undefined;
print(zorro);


/***/ })
/******/ ]);