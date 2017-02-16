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

eval("// import {print} from './utils'\r\n// import Paard from './horse';\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n// new Paard();\r\n// print('Hello');\r\n// function addProps(target) {\r\n//     target.prototype.x = 1;\r\n// }\r\n// class RootCat{\r\n//     // species: 'cat';\r\n// }\r\n// class Siamees extends RootCat {\r\n//     species: 'cat';\r\n//      sleep1(){\r\n//     }\r\n//     eat(){}\r\n// }\r\n// class EK {\r\n//     species: 'cat';\r\n//      sleep2(){\r\n//     }\r\n//     eat(){}\r\n// }\r\n// type Cat = Siamees|EK;\r\n// function log(msg){\r\n//     return function(target:any, name:string){\r\n//     // console.log('name', name)\r\n//         const fn = target[name];\r\n//         target[name] = function() {\r\n//             console.log('Calling',msg, name)\r\n//             fn.call(this);\r\n//         }\r\n//         return target;\r\n//     }\r\n// }\r\n// @addProps\r\n// class Dog {\r\n//     species: 'dog';\r\n//     @log('THis is a dog')\r\n//      eat() {\r\n//         console.log('X = ', (<any>this).x)\r\n//     }\r\n// }\r\n// type Pet = Cat|Dog|null;\r\n// function doStuff(pet: Pet){\r\n// if (pet instanceof Siamees){\r\n//     pet.sleep1();\r\n// }\r\n// switch (pet.species){\r\n//     case 'dog':\r\n//     pet.eat()\r\n//     break;\r\n//     case 'cat':\r\n//     pet.eat();\r\n//     break;\r\n//     // case 'bird':\r\n//     // break;\r\n// }\r\n// }\r\n// doStuff(new Siamees())\r\n// doStuff(new Dog())\r\n// // doStuff('')\r\n// new Dog().eat();\r\nfunction doStuff(x) {\r\n    return new Promise(resolve => {\r\n        setTimeout(() => resolve(new Date()), x * 5000);\r\n    });\r\n}\r\nfunction start() {\r\n    doStuff(1).then((x) => console.log(x));\r\n    doStuff(2).then((x) => console.log(x));\r\n}\r\nfunction start2() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        var x1 = yield doStuff(1);\r\n        var x2 = yield doStuff(2);\r\n        console.log(x1);\r\n        console.log(x2);\r\n    });\r\n}\r\nfunction start3() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        var x1 = doStuff(1);\r\n        var x2 = doStuff(2);\r\n        x2 = yield x2;\r\n        x1 = yield x1;\r\n        console.log(x1);\r\n        console.log(x2);\r\n    });\r\n}\r\nsetTimeout(() => start3(), 5000);\r\n// start3();\r\nclass Cat {\r\n    constructor(name) {\r\n        this.name = name;\r\n    }\r\n    eat() {\r\n        console.log(this.name);\r\n    }\r\n    add(x, y) {\r\n        return x + y;\r\n    }\r\n    subtract(x, y) {\r\n        return x - y;\r\n    }\r\n}\r\nvar zorro = new Cat('Zorro');\r\nvar sum = zorro.add(1, 2);\r\nzorro.subtract(1, 2);\r\nvar o = {\r\n    name: 'Maurice',\r\n    fn: function (x) {\r\n        console.log(this.name);\r\n    }\r\n};\r\no.fn(1);\r\nfunction print(cat) {\r\n    console.log(cat);\r\n    // if (cat){\r\n    //   console.log(cat.name);\r\n    // }\r\n}\r\nprint(zorro);\r\n// print(null);\r\n// zorro=null;\r\nzorro = undefined;\r\nprint(zorro);\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLnRzPzNhYTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDO0FBQ2hDLCtCQUErQjs7Ozs7Ozs7O0FBRS9CLGVBQWU7QUFFZixrQkFBa0I7QUFJbEIsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5QixJQUFJO0FBRUosaUJBQWlCO0FBQ2pCLHlCQUF5QjtBQUN6QixJQUFJO0FBRUosa0NBQWtDO0FBQ2xDLHNCQUFzQjtBQUN0QixpQkFBaUI7QUFFakIsUUFBUTtBQUVSLGNBQWM7QUFDZCxJQUFJO0FBRUosYUFBYTtBQUNiLHNCQUFzQjtBQUN0QixpQkFBaUI7QUFFakIsUUFBUTtBQUNSLGNBQWM7QUFDZCxJQUFJO0FBRUoseUJBQXlCO0FBR3pCLHFCQUFxQjtBQUNyQixnREFBZ0Q7QUFDaEQsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUVuQyxzQ0FBc0M7QUFDdEMsK0NBQStDO0FBQy9DLDZCQUE2QjtBQUM3QixZQUFZO0FBRVoseUJBQXlCO0FBQ3pCLFFBQVE7QUFDUixJQUFJO0FBRUosWUFBWTtBQUNaLGNBQWM7QUFDZCxzQkFBc0I7QUFFdEIsNEJBQTRCO0FBQzVCLGVBQWU7QUFDZiw2Q0FBNkM7QUFDN0MsUUFBUTtBQUNSLElBQUk7QUFHSiwyQkFBMkI7QUFHM0IsOEJBQThCO0FBRTlCLCtCQUErQjtBQUMvQixvQkFBb0I7QUFDcEIsSUFBSTtBQUVKLHdCQUF3QjtBQUN4QixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYixrQkFBa0I7QUFDbEIsaUJBQWlCO0FBRWpCLGFBQWE7QUFDYixzQkFBc0I7QUFDdEIsZ0JBQWdCO0FBQ2hCLElBQUk7QUFDSixJQUFJO0FBR0oseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFFakIsbUJBQW1CO0FBS25CLGlCQUFpQixDQUFTO0lBQ3RCLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPO1FBQ3RCLFVBQVUsQ0FBQyxNQUFNLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUMsQ0FBQztBQUNOLENBQUM7QUFHRDtJQUNJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFTLEtBQUssT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9DLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFTLEtBQUssT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25ELENBQUM7QUFFRDs7UUFDSSxJQUFJLEVBQUUsR0FBRyxNQUFNLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixJQUFJLEVBQUUsR0FBRyxNQUFNLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUxQixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEIsQ0FBQztDQUFBO0FBRUQ7O1FBQ0ksSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVwQixFQUFFLEdBQUcsTUFBTSxFQUFFLENBQUM7UUFDZCxFQUFFLEdBQUcsTUFBTSxFQUFFLENBQUM7UUFFZCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEIsQ0FBQztDQUFBO0FBRUQsVUFBVSxDQUFDLE1BQU0sTUFBTSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDakMsWUFBWTtBQUlaO0lBRUksWUFBbUIsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7SUFBSSxDQUFDO0lBRXBDLEdBQUc7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsR0FBRyxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQ3BCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxRQUFRLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDekIsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQztDQUNKO0FBR0QsSUFBSSxLQUFLLEdBQTJCLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JELElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUV6QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUdyQixJQUFJLENBQUMsR0FBRztJQUNKLElBQUksRUFBRSxTQUFTO0lBQ2YsRUFBRSxFQUFFLFVBQWtDLENBQVM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzFCLENBQUM7Q0FDSjtBQUVELENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFHUixlQUFlLEdBQTJCO0lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixJQUFJO0FBQ1IsQ0FBQztBQUdELEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNiLGVBQWU7QUFHZixjQUFjO0FBQ2QsS0FBSyxHQUFHLFNBQVMsQ0FBQztBQUNsQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7cHJpbnR9IGZyb20gJy4vdXRpbHMnXHJcbi8vIGltcG9ydCBQYWFyZCBmcm9tICcuL2hvcnNlJztcclxuXHJcbi8vIG5ldyBQYWFyZCgpO1xyXG5cclxuLy8gcHJpbnQoJ0hlbGxvJyk7XHJcblxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGFkZFByb3BzKHRhcmdldCkge1xyXG4vLyAgICAgdGFyZ2V0LnByb3RvdHlwZS54ID0gMTtcclxuLy8gfVxyXG5cclxuLy8gY2xhc3MgUm9vdENhdHtcclxuLy8gICAgIC8vIHNwZWNpZXM6ICdjYXQnO1xyXG4vLyB9XHJcblxyXG4vLyBjbGFzcyBTaWFtZWVzIGV4dGVuZHMgUm9vdENhdCB7XHJcbi8vICAgICBzcGVjaWVzOiAnY2F0JztcclxuLy8gICAgICBzbGVlcDEoKXtcclxuXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgZWF0KCl7fVxyXG4vLyB9XHJcblxyXG4vLyBjbGFzcyBFSyB7XHJcbi8vICAgICBzcGVjaWVzOiAnY2F0JztcclxuLy8gICAgICBzbGVlcDIoKXtcclxuXHJcbi8vICAgICB9XHJcbi8vICAgICBlYXQoKXt9XHJcbi8vIH1cclxuXHJcbi8vIHR5cGUgQ2F0ID0gU2lhbWVlc3xFSztcclxuXHJcblxyXG4vLyBmdW5jdGlvbiBsb2cobXNnKXtcclxuLy8gICAgIHJldHVybiBmdW5jdGlvbih0YXJnZXQ6YW55LCBuYW1lOnN0cmluZyl7XHJcbi8vICAgICAvLyBjb25zb2xlLmxvZygnbmFtZScsIG5hbWUpXHJcbi8vICAgICAgICAgY29uc3QgZm4gPSB0YXJnZXRbbmFtZV07XHJcblxyXG4vLyAgICAgICAgIHRhcmdldFtuYW1lXSA9IGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FsbGluZycsbXNnLCBuYW1lKVxyXG4vLyAgICAgICAgICAgICBmbi5jYWxsKHRoaXMpO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gQGFkZFByb3BzXHJcbi8vIGNsYXNzIERvZyB7XHJcbi8vICAgICBzcGVjaWVzOiAnZG9nJztcclxuXHJcbi8vICAgICBAbG9nKCdUSGlzIGlzIGEgZG9nJylcclxuLy8gICAgICBlYXQoKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ1ggPSAnLCAoPGFueT50aGlzKS54KVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5cclxuLy8gdHlwZSBQZXQgPSBDYXR8RG9nfG51bGw7XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gZG9TdHVmZihwZXQ6IFBldCl7XHJcblxyXG4vLyBpZiAocGV0IGluc3RhbmNlb2YgU2lhbWVlcyl7XHJcbi8vICAgICBwZXQuc2xlZXAxKCk7XHJcbi8vIH1cclxuXHJcbi8vIHN3aXRjaCAocGV0LnNwZWNpZXMpe1xyXG4vLyAgICAgY2FzZSAnZG9nJzpcclxuLy8gICAgIHBldC5lYXQoKVxyXG4vLyAgICAgYnJlYWs7XHJcbi8vICAgICBjYXNlICdjYXQnOlxyXG4vLyAgICAgcGV0LmVhdCgpO1xyXG5cclxuLy8gICAgIGJyZWFrO1xyXG4vLyAgICAgLy8gY2FzZSAnYmlyZCc6XHJcbi8vICAgICAvLyBicmVhaztcclxuLy8gfVxyXG4vLyB9XHJcblxyXG5cclxuLy8gZG9TdHVmZihuZXcgU2lhbWVlcygpKVxyXG4vLyBkb1N0dWZmKG5ldyBEb2coKSlcclxuLy8gLy8gZG9TdHVmZignJylcclxuXHJcbi8vIG5ldyBEb2coKS5lYXQoKTtcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRvU3R1ZmYoeDogbnVtYmVyKTogYW55IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUobmV3IERhdGUoKSksIHggKiA1MDAwKTtcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzdGFydCgpIHtcclxuICAgIGRvU3R1ZmYoMSkudGhlbigoeDogbnVtYmVyKSA9PiBjb25zb2xlLmxvZyh4KSk7XHJcbiAgICBkb1N0dWZmKDIpLnRoZW4oKHg6IG51bWJlcikgPT4gY29uc29sZS5sb2coeCkpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzdGFydDIoKSB7XHJcbiAgICB2YXIgeDEgPSBhd2FpdCBkb1N0dWZmKDEpO1xyXG4gICAgdmFyIHgyID0gYXdhaXQgZG9TdHVmZigyKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh4MSk7XHJcbiAgICBjb25zb2xlLmxvZyh4Mik7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0MygpIHtcclxuICAgIHZhciB4MSA9IGRvU3R1ZmYoMSk7XHJcbiAgICB2YXIgeDIgPSBkb1N0dWZmKDIpO1xyXG5cclxuICAgIHgyID0gYXdhaXQgeDI7XHJcbiAgICB4MSA9IGF3YWl0IHgxO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHgxKTtcclxuICAgIGNvbnNvbGUubG9nKHgyKTtcclxufVxyXG5cclxuc2V0VGltZW91dCgoKSA9PiBzdGFydDMoKSwgNTAwMCk7XHJcbi8vIHN0YXJ0MygpO1xyXG5cclxuXHJcblxyXG5jbGFzcyBDYXQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHsgfVxyXG5cclxuICAgIGVhdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB4ICsgeTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJ0cmFjdCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB4IC0geTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbnZhciB6b3JybzogQ2F0IHwgbnVsbCB8IHVuZGVmaW5lZCA9IG5ldyBDYXQoJ1pvcnJvJyk7XHJcbnZhciBzdW0gPSB6b3Jyby5hZGQoMSwgMilcclxuXHJcbnpvcnJvLnN1YnRyYWN0KDEsIDIpO1xyXG5cclxuXHJcbnZhciBvID0ge1xyXG4gICAgbmFtZTogJ01hdXJpY2UnLFxyXG4gICAgZm46IGZ1bmN0aW9uICh0aGlzOiB7IG5hbWU6IHN0cmluZyB9LCB4OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUpXHJcbiAgICB9XHJcbn1cclxuXHJcbm8uZm4oMSk7XHJcblxyXG5cclxuZnVuY3Rpb24gcHJpbnQoY2F0OiBDYXQgfCBudWxsIHwgdW5kZWZpbmVkKSB7XHJcbiAgICBjb25zb2xlLmxvZyhjYXQpO1xyXG4gICAgLy8gaWYgKGNhdCl7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKGNhdC5uYW1lKTtcclxuICAgIC8vIH1cclxufVxyXG5cclxuXHJcbnByaW50KHpvcnJvKTtcclxuLy8gcHJpbnQobnVsbCk7XHJcblxyXG5cclxuLy8gem9ycm89bnVsbDtcclxuem9ycm8gPSB1bmRlZmluZWQ7XHJcbnByaW50KHpvcnJvKTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21haW4udHMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);