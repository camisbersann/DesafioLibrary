// class User {
//     constructor(name,age){
//         this.name= name;
//         this.age= age;
//     }

//     introduce() {
//         console.log(`Olá, meu nome é ${this.name} e tenho ${this.age} anos.`);
//     }

//     getName(){
//         return this.name;
//     }

//     getAge(){
//         return this.age;
//     }
// }

// const user1 = new User('João', 30);
// user1.introduce();
// console.log(user2.getAge());

// const user2 = new User('Camila', 16);
// user2.introduce();
// console.log(user2.getName());



// class Pizza {
//     constructor(base, sauce, toppings, cheese) {
//         this.base = base;
//         this.sauce = sauce;
//         this.toppings = toppings;
//         this.cheese = cheese;
//     }

//     getDesc() {
//         return `Uma deliciosa pizza ${this.base}, 
//         com o molho de ${this.sauce}, com cobertura de ${this.toppings} 
//         e com o queijo do tipo: ${this.cheese}`
//     }

//     getPriceBase(){
//         if(this.base.toLowerCase() == 'traditional'){
//             return 5;
//         }else if(this.base.toLowerCase() == 'integral'){
//             return 7;
//         } else{
//             return `Não trabalhamos com essa base: ${this.base}`;
//         }
//     }

//     getPriceSauce(){
//         if(this.sauce.toLowerCase() == 'tomato'){
//             return 3;
//         }else if(this.sauce.toLowerCase() == 'pezzo'){
//             return 6;
//         } else{
//             return `Não trabalhamos com essa base: ${this.sauce}`;
//         }
//     }

//     getpriceToppings(){
//         if(this.toppings.toLowerCase() == 'pepperoni'){
//             return 10;
//         }else if(this.toppings.toLowerCase() == 'chicken'){
//             return 9;
//         } else{
//             return `Não trabalhamos com essa base: ${this.toppings}`;
//         }

//     }

//     getPriceCheese(){
//         if(this.cheese.toLowerCase() == 'cheedar'){
//             return 20;
//         }else if(this.cheese.toLowerCase() == 'mozzarella'){
//             return 7;
//         } else{
//             return `Não trabalhamos com essa base: ${this.cheese}`;
//         }
//     }

//     getTotalPricePizza(){
//         return this.getPriceBase() + this.getPriceSauce() + this.getpriceToppings() + this.getPriceCheese();
//     }
// }

// const pizza1 = new Pizza('traditional', 'tomato', 'pepperoni', 'cheedar');
// console.log(pizza1);

// const pizza2 = new Pizza('integral', 'pezzo', 'chicken', 'mozzarella')
// console.log(pizza1.getDesc());

// console.log(pizza1.getTotalPricePizza());
// console.log(pizza2.getTotalPricePizza());


// class Calculator {
//     add(a,b){
//         return a + b;
//     }
//     multiply(a,b){
//         return a * b;
//     }
//     divide(a,b){
//         return a / b;
//     }
// }

// const calculator = new Calculator();
// console.log(calculator.add(2,3));

// const multiply = calculator.multiply(2,3);
// console.log(multiply);

// const divide = calculator.divide(2,3);
// console.log(divide);

class Witch{
    constructor(name, patron, house, wand){
        this.name= name;
        this.patron= patron;
        this.house= house;
        this.wand= wand;
        this.spellLearned = [];
    }

    getFullDescription(){
        return `O nome do(a) bruxo(a) é: ${this.name}, o patrono do(a) bruxo(a) é: ${this.patron}, a casa do(a) bruxo(a) é: ${this.house}, A varinha do(a) bruxo(a) é: ${this.wand} `
    }

    getName(){
        return `O nome do(a) bruxo(a) é: ${this.name}`
    }

    getPatron(){
        return `O patrono do(a) bruxo(a) é: ${this.patron}`
    }

    getHouse(){
        return `A casa do(a) bruxo(a) é: ${this.house}`
    }

    getWand(){
        return `A varinha do(a) bruxo(a) é: ${this.wand}`
    }

    learnedASpell(spell){
        this.spellLearned.push(spell);
    }
}

// const witch1 = new Witch('Hermione Granger', 'Otter', 'Gryffindor', 'Vine wood and dragon heartstring');

// console.log(witch1);

// witch1.learnedASpell("Accio");
// witch1.learnedASpell("Wingardium Leviosa");
// witch1.learnedASpell("Expecto Patronum");
// witch1.learnedASpell("Expelliarmus");

class TypeWitch extends Witch{
    constructor(name, patron, house, wand, typeWitch){
        super(name, patron, house, wand);
        this.typeWitch = typeWitch.toUpperCase();
    }

    getTypeWitch(){
        if(this.typeWitch == 'M'){
            return `O tipo de bruxo(a) é: ${this.typeWitch } - Meio Sangue`;
        }else if(this.typeWitch == 'P'){
            return `O tipo de bruxo(a) é: ${this.typeWitch } - Puro`;
        }else{
            return ` Não é um bruxo(a) `;
        }
    }
}

const witch1 = new TypeWitch('Hermione Granger', 'Otter', 'Gryffindor', 'Vine wood and dragon heartstring', 'M');
console.log(witch1.getTypeWitch());


class ChamberOfSecret{
    constructor(name, pwd){
        this.name = name;
        let _pwd = pwd; //Atributo privado;

        //metodo privado
        this.checkPwd = (pwdInput) => {
            if(_pwd == pwdInput){
                return true;
            }else{
                return false;
            }
        }




    }

    acessChamber(pwdInput){
        if(this.checkPwd(pwdInput)){
            return `Bem Vindo(a) ${this.name} a camara secreta`;
        }else{
            return `Senha incorreta`;
        }
    }

    showName(){
        return this.name;
    }
}

const user1 = new ChamberOfSecret('Harry Potter', '1234');
console.log(user1.acessChamber('1234'));