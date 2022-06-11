function returnEvenValues(array){
    console.log("entrou na funcao")
    array.forEach(element => {
        (element%2 === 0)
        ? console.log(element)
        : console.log("");
    });
}

console.log('Hello,world!');

let array=[1,2,3,4,5,6,7,8,9];

returnEvenValues(array);