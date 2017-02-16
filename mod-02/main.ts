// import {print} from './utils'
// import Paard from './horse';

// new Paard();

// print('Hello');



function addProps(target: any) {
    target.prototype.x = 1;
}

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


function log(msg: string) {
    return function (target: any, name: string, descriptor: TypedPropertyDescriptor<() => void>) {
        // console.log('name', name)
        const fn = target[name];

        target[name] = function (this: Dog) {
            console.log('Calling', msg, name)
            fn.call(this);
        }

        return target;
    }
}

@addProps
class Dog {
    species: 'dog';

    @log('THis is a dog')
    eat() {
        console.log('X = ', (<any>this).x)
    }
}


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




function doStuff(x: number): any {
    return new Promise(resolve => {
        setTimeout(() => resolve(new Date()), x * 5000);
    })
}


function start() {
    doStuff(1).then((x: number) => console.log(x));
    doStuff(2).then((x: number) => console.log(x));
}

async function start2() {
    var x1 = await doStuff(1);
    var x2 = await doStuff(2);

    console.log(x1);
    console.log(x2);
}

async function start3() {
    var x1 = doStuff(1);
    var x2 = doStuff(2);

    x2 = await x2;
    x1 = await x1;

    console.log(x1);
    console.log(x2);
}

start3();



class Cat {

    constructor(public name: string) { }

    eat() {
        console.log(this.name);
    }

    add(x: number, y: number) {
        return x + y;
    }

    subtract(x: number, y: number) {
        return x - y;
    }
}


var zorro: Cat | null | undefined = new Cat('Zorro');
var sum = zorro.add(1, 2)

zorro.subtract(1, 2);


var o = {
    name: 'Maurice',
    fn: function (this: { name: string }, x: number) {
        console.log(this.name)
    }
}

o.fn(1);


function print(cat: Cat | null | undefined) {
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

