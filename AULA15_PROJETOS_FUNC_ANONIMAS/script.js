//FUNÇÕES ANONIMAS
//sintaxe 

/*
() - padrão de passagem de argumento em funções 
=> : e a forma que usamos para identificar o termo arrow 
{} : e o escopo (bloco de código) da função prioriamento */

function somar(a,b){
    let total = a+b;
    console.log(total);

};
somar(2,10);

//atribuindo uma função anonima a uma variavel
let subtrair=(num1,num2)=>{
    let total = num1-num2;
    console.log(total);
};
subtrair(15,17);

let numeros =[1,2,3,10];
numeros.map((item)=>{
    console.log(item);
});