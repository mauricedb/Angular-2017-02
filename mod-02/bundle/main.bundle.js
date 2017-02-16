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

eval("// import {print} from './utils'\r\n// import Paard from './horse';\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n// new Paard();\r\n// print('Hello');\r\nfunction addProps(target) {\r\n    target.prototype.x = 1;\r\n}\r\n// class RootCat{\r\n//     // species: 'cat';\r\n// }\r\n// class Siamees extends RootCat {\r\n//     species: 'cat';\r\n//      sleep1(){\r\n//     }\r\n//     eat(){}\r\n// }\r\n// class EK {\r\n//     species: 'cat';\r\n//      sleep2(){\r\n//     }\r\n//     eat(){}\r\n// }\r\n// type Cat = Siamees|EK;\r\nfunction log(msg) {\r\n    return function (target, name, descriptor) {\r\n        // console.log('name', name)\r\n        const fn = target[name];\r\n        target[name] = function () {\r\n            console.log('Calling', msg, name);\r\n            fn.call(this);\r\n        };\r\n        return target;\r\n    };\r\n}\r\nlet Dog = class Dog {\r\n    eat() {\r\n        console.log('X = ', this.x);\r\n    }\r\n};\r\n__decorate([\r\n    log('THis is a dog')\r\n], Dog.prototype, \"eat\", null);\r\nDog = __decorate([\r\n    addProps\r\n], Dog);\r\n// type Pet = Cat|Dog|null;\r\n// function doStuff(pet: Pet){\r\n// if (pet instanceof Siamees){\r\n//     pet.sleep1();\r\n// }\r\n// switch (pet.species){\r\n//     case 'dog':\r\n//     pet.eat()\r\n//     break;\r\n//     case 'cat':\r\n//     pet.eat();\r\n//     break;\r\n//     // case 'bird':\r\n//     // break;\r\n// }\r\n// }\r\n// doStuff(new Siamees())\r\n// doStuff(new Dog())\r\n// // doStuff('')\r\n// new Dog().eat();\r\nfunction doStuff(x) {\r\n    return new Promise(resolve => {\r\n        setTimeout(() => resolve(new Date()), x * 5000);\r\n    });\r\n}\r\nfunction start() {\r\n    doStuff(1).then((x) => console.log(x));\r\n    doStuff(2).then((x) => console.log(x));\r\n}\r\nfunction start2() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        var x1 = yield doStuff(1);\r\n        var x2 = yield doStuff(2);\r\n        console.log(x1);\r\n        console.log(x2);\r\n    });\r\n}\r\nfunction start3() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        var x1 = doStuff(1);\r\n        var x2 = doStuff(2);\r\n        x2 = yield x2;\r\n        x1 = yield x1;\r\n        console.log(x1);\r\n        console.log(x2);\r\n    });\r\n}\r\nstart3();\r\nclass Cat {\r\n    constructor(name) {\r\n        this.name = name;\r\n    }\r\n    eat() {\r\n        console.log(this.name);\r\n    }\r\n    add(x, y) {\r\n        return x + y;\r\n    }\r\n    subtract(x, y) {\r\n        return x - y;\r\n    }\r\n}\r\nvar zorro = new Cat('Zorro');\r\nvar sum = zorro.add(1, 2);\r\nzorro.subtract(1, 2);\r\nvar o = {\r\n    name: 'Maurice',\r\n    fn: function (x) {\r\n        console.log(this.name);\r\n    }\r\n};\r\no.fn(1);\r\nfunction print(cat) {\r\n    console.log(cat);\r\n    // if (cat){\r\n    //   console.log(cat.name);\r\n    // }\r\n}\r\nprint(zorro);\r\n// print(null);\r\n// zorro=null;\r\nzorro = undefined;\r\nprint(zorro);\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLnRzPzNhYTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDO0FBQ2hDLCtCQUErQjs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLGVBQWU7QUFFZixrQkFBa0I7QUFJbEIsa0JBQWtCLE1BQVc7SUFDekIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFFRCxpQkFBaUI7QUFDakIseUJBQXlCO0FBQ3pCLElBQUk7QUFFSixrQ0FBa0M7QUFDbEMsc0JBQXNCO0FBQ3RCLGlCQUFpQjtBQUVqQixRQUFRO0FBRVIsY0FBYztBQUNkLElBQUk7QUFFSixhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLGlCQUFpQjtBQUVqQixRQUFRO0FBQ1IsY0FBYztBQUNkLElBQUk7QUFFSix5QkFBeUI7QUFHekIsYUFBYSxHQUFXO0lBQ3BCLE1BQU0sQ0FBQyxVQUFVLE1BQVcsRUFBRSxJQUFZLEVBQUUsVUFBK0M7UUFDdkYsNEJBQTRCO1FBQzVCLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO1lBQ2pDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsQ0FBQztRQUVELE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztBQUNMLENBQUM7QUFHRCxJQUFNLEdBQUcsR0FBVDtJQUlJLEdBQUc7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBUSxJQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FDSjtBQUhHO0lBREMsR0FBRyxDQUFDLGVBQWUsQ0FBQzs4QkFHcEI7QUFOQyxHQUFHO0lBRFIsUUFBUTtHQUNILEdBQUcsQ0FPUjtBQUdELDJCQUEyQjtBQUczQiw4QkFBOEI7QUFFOUIsK0JBQStCO0FBQy9CLG9CQUFvQjtBQUNwQixJQUFJO0FBRUosd0JBQXdCO0FBQ3hCLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFFakIsYUFBYTtBQUNiLHNCQUFzQjtBQUN0QixnQkFBZ0I7QUFDaEIsSUFBSTtBQUNKLElBQUk7QUFHSix5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUVqQixtQkFBbUI7QUFLbkIsaUJBQWlCLENBQVM7SUFDdEIsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU87UUFDdEIsVUFBVSxDQUFDLE1BQU0sT0FBTyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUdEO0lBQ0ksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQVMsS0FBSyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQVMsS0FBSyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQUVEOztRQUNJLElBQUksRUFBRSxHQUFHLE1BQU0sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQUksRUFBRSxHQUFHLE1BQU0sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwQixDQUFDO0NBQUE7QUFFRDs7UUFDSSxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXBCLEVBQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQztRQUNkLEVBQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQztRQUVkLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwQixDQUFDO0NBQUE7QUFFRCxNQUFNLEVBQUUsQ0FBQztBQUlUO0lBRUksWUFBbUIsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7SUFBSSxDQUFDO0lBRXBDLEdBQUc7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsR0FBRyxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQ3BCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxRQUFRLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDekIsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQztDQUNKO0FBR0QsSUFBSSxLQUFLLEdBQTJCLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JELElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUV6QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUdyQixJQUFJLENBQUMsR0FBRztJQUNKLElBQUksRUFBRSxTQUFTO0lBQ2YsRUFBRSxFQUFFLFVBQWtDLENBQVM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzFCLENBQUM7Q0FDSjtBQUVELENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFHUixlQUFlLEdBQTJCO0lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixJQUFJO0FBQ1IsQ0FBQztBQUdELEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNiLGVBQWU7QUFHZixjQUFjO0FBQ2QsS0FBSyxHQUFHLFNBQVMsQ0FBQztBQUNsQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7cHJpbnR9IGZyb20gJy4vdXRpbHMnXHJcbi8vIGltcG9ydCBQYWFyZCBmcm9tICcuL2hvcnNlJztcclxuXHJcbi8vIG5ldyBQYWFyZCgpO1xyXG5cclxuLy8gcHJpbnQoJ0hlbGxvJyk7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZFByb3BzKHRhcmdldDogYW55KSB7XHJcbiAgICB0YXJnZXQucHJvdG90eXBlLnggPSAxO1xyXG59XHJcblxyXG4vLyBjbGFzcyBSb290Q2F0e1xyXG4vLyAgICAgLy8gc3BlY2llczogJ2NhdCc7XHJcbi8vIH1cclxuXHJcbi8vIGNsYXNzIFNpYW1lZXMgZXh0ZW5kcyBSb290Q2F0IHtcclxuLy8gICAgIHNwZWNpZXM6ICdjYXQnO1xyXG4vLyAgICAgIHNsZWVwMSgpe1xyXG5cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBlYXQoKXt9XHJcbi8vIH1cclxuXHJcbi8vIGNsYXNzIEVLIHtcclxuLy8gICAgIHNwZWNpZXM6ICdjYXQnO1xyXG4vLyAgICAgIHNsZWVwMigpe1xyXG5cclxuLy8gICAgIH1cclxuLy8gICAgIGVhdCgpe31cclxuLy8gfVxyXG5cclxuLy8gdHlwZSBDYXQgPSBTaWFtZWVzfEVLO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGxvZyhtc2c6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgbmFtZTogc3RyaW5nLCBkZXNjcmlwdG9yOiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjwoKSA9PiB2b2lkPikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCduYW1lJywgbmFtZSlcclxuICAgICAgICBjb25zdCBmbiA9IHRhcmdldFtuYW1lXTtcclxuXHJcbiAgICAgICAgdGFyZ2V0W25hbWVdID0gZnVuY3Rpb24gKHRoaXM6IERvZykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FsbGluZycsIG1zZywgbmFtZSlcclxuICAgICAgICAgICAgZm4uY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBhZGRQcm9wc1xyXG5jbGFzcyBEb2cge1xyXG4gICAgc3BlY2llczogJ2RvZyc7XHJcblxyXG4gICAgQGxvZygnVEhpcyBpcyBhIGRvZycpXHJcbiAgICBlYXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1ggPSAnLCAoPGFueT50aGlzKS54KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gdHlwZSBQZXQgPSBDYXR8RG9nfG51bGw7XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gZG9TdHVmZihwZXQ6IFBldCl7XHJcblxyXG4vLyBpZiAocGV0IGluc3RhbmNlb2YgU2lhbWVlcyl7XHJcbi8vICAgICBwZXQuc2xlZXAxKCk7XHJcbi8vIH1cclxuXHJcbi8vIHN3aXRjaCAocGV0LnNwZWNpZXMpe1xyXG4vLyAgICAgY2FzZSAnZG9nJzpcclxuLy8gICAgIHBldC5lYXQoKVxyXG4vLyAgICAgYnJlYWs7XHJcbi8vICAgICBjYXNlICdjYXQnOlxyXG4vLyAgICAgcGV0LmVhdCgpO1xyXG5cclxuLy8gICAgIGJyZWFrO1xyXG4vLyAgICAgLy8gY2FzZSAnYmlyZCc6XHJcbi8vICAgICAvLyBicmVhaztcclxuLy8gfVxyXG4vLyB9XHJcblxyXG5cclxuLy8gZG9TdHVmZihuZXcgU2lhbWVlcygpKVxyXG4vLyBkb1N0dWZmKG5ldyBEb2coKSlcclxuLy8gLy8gZG9TdHVmZignJylcclxuXHJcbi8vIG5ldyBEb2coKS5lYXQoKTtcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRvU3R1ZmYoeDogbnVtYmVyKTogYW55IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUobmV3IERhdGUoKSksIHggKiA1MDAwKTtcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzdGFydCgpIHtcclxuICAgIGRvU3R1ZmYoMSkudGhlbigoeDogbnVtYmVyKSA9PiBjb25zb2xlLmxvZyh4KSk7XHJcbiAgICBkb1N0dWZmKDIpLnRoZW4oKHg6IG51bWJlcikgPT4gY29uc29sZS5sb2coeCkpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzdGFydDIoKSB7XHJcbiAgICB2YXIgeDEgPSBhd2FpdCBkb1N0dWZmKDEpO1xyXG4gICAgdmFyIHgyID0gYXdhaXQgZG9TdHVmZigyKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh4MSk7XHJcbiAgICBjb25zb2xlLmxvZyh4Mik7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0MygpIHtcclxuICAgIHZhciB4MSA9IGRvU3R1ZmYoMSk7XHJcbiAgICB2YXIgeDIgPSBkb1N0dWZmKDIpO1xyXG5cclxuICAgIHgyID0gYXdhaXQgeDI7XHJcbiAgICB4MSA9IGF3YWl0IHgxO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHgxKTtcclxuICAgIGNvbnNvbGUubG9nKHgyKTtcclxufVxyXG5cclxuc3RhcnQzKCk7XHJcblxyXG5cclxuXHJcbmNsYXNzIENhdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykgeyB9XHJcblxyXG4gICAgZWF0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHggKyB5O1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnRyYWN0KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHggLSB5O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxudmFyIHpvcnJvOiBDYXQgfCBudWxsIHwgdW5kZWZpbmVkID0gbmV3IENhdCgnWm9ycm8nKTtcclxudmFyIHN1bSA9IHpvcnJvLmFkZCgxLCAyKVxyXG5cclxuem9ycm8uc3VidHJhY3QoMSwgMik7XHJcblxyXG5cclxudmFyIG8gPSB7XHJcbiAgICBuYW1lOiAnTWF1cmljZScsXHJcbiAgICBmbjogZnVuY3Rpb24gKHRoaXM6IHsgbmFtZTogc3RyaW5nIH0sIHg6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSlcclxuICAgIH1cclxufVxyXG5cclxuby5mbigxKTtcclxuXHJcblxyXG5mdW5jdGlvbiBwcmludChjYXQ6IENhdCB8IG51bGwgfCB1bmRlZmluZWQpIHtcclxuICAgIGNvbnNvbGUubG9nKGNhdCk7XHJcbiAgICAvLyBpZiAoY2F0KXtcclxuICAgIC8vICAgY29uc29sZS5sb2coY2F0Lm5hbWUpO1xyXG4gICAgLy8gfVxyXG59XHJcblxyXG5cclxucHJpbnQoem9ycm8pO1xyXG4vLyBwcmludChudWxsKTtcclxuXHJcblxyXG4vLyB6b3Jybz1udWxsO1xyXG56b3JybyA9IHVuZGVmaW5lZDtcclxucHJpbnQoem9ycm8pO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbWFpbi50cyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);