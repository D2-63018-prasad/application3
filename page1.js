function isEven(number){
    if(number%2==0){
        console.log(`${number} is even`)
    }else{
        console.log(`${number} is NOT even`)
    }
}

isEven(10)
isEven(11)

function isOdd(number){
    if(number%2!=0){
        console.log(`${number} is Odd Number`)
    }else{
        console.log(`${number} is not Odd-number`)
    }
}

isOdd(5)
isOdd(6)

function add(p1,p2){
    console.log(`${p1}+${p2}=${p1+p2}`)
}

add(5,10)

function substract(p1,p2){
    console.log(`${p1}-${p2}=${p1-p2}`)
}

substract(30,20)

function divide(p1,p2){
    console.log(`${p1}/${p2}=${p1/p2}`)
}

divide(30,10)

function multiply(p1,p2){
    console.log(`${p1}*${p2}=${p1*p2}`)
}

multiply(3,2)

function cube(number){
    console.log(`cubeof ${number}=${number **3 }`)
}

cube(2)
function square(number){
    console.log(`squareof ${number}=${number **2 }`)
}

square(2)
