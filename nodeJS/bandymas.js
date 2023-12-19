
// let a = 0.1+0.2; 
// let b = 0.3;
// let sum = a = b;

// console.log(sum)


// function add(number){
//     return number
// }
// const result = add(10) 
// console.log(result)


// function add (a,b){
//     return a + b
// }

// const sum = add

// function averge(a, b, fn){
//     return fn(a , b) / 2
// }
// const result = averge(10, 20, sum )
// console.log(result)

// let array1 = [1,2]
// let array2 = [3,4]
// let array3 = [5,6]

// let newArray = array1.concat(array2,array3)

// console.log(newArray)


// let numbers = [10, 20, 30];
// let length = numbers.push(40, 100, 200)

// console.log(numbers)


// let numbers = [10, 20, 30];
// let numbers1 = [1, 2, 3, 4];

// numbers.push(...numbers1)

// console.log(numbers)



// function pushElement(array, element){
//     array.push(element)
//     return array.lenght;
// }
// let myArray = [1, 2, 3, 4];

// pushElement(myArray, 8)

// console.log(myArray)


// function createArray(){
//     let newArray = [];
//     newArray.push(1, 2, 3)
//     return newArray
// }

// let result = createArray()
// console.log(result)


// function appendArray(stringArray, numberArray){
//     stringArray.push(...numberArray)
//     return stringArray
// }

// let array2 = ["a", "b", "c"];
// let numberArray = [1, 2, 3];
// let result = appendArray(array2, numberArray)
// console.log(result)


// function popArray (array){
//         return array.pop()
// }

// let array1 = [1, 2, 3]
// let result = popArray(array1)
// console.log(result)



// function createArray (){
//     let newArray = [1, 2, 3,];
//     while(newArray.length > 0){
//         newArray.pop()
//     }
//     return newArray
// }

// let result = createArray();

// console.log(result)



// function squareArrayElements(arr){
//         let squareArrey = [];
//         arr.forEach(element => {
//             squareArrey.push(element * element)
            
//         });
//         return squareArrey;
// };

// let data =[1, 2, 3]
// let  result = squareArrayElements(data)
// console.log(result);

// function mapArray(arr){
//         return arr.map((element) => element * 2)
// }

// let array = [1, 2, 3];

// let result = mapArray(array);
// console.log(result);




function funName(arr, cllback){
    let sum = 0;
    for (let i =0; i<arr.length; i++){
        sum = cllback(sum, arr[i])
    }
    return sum
}


function add (a, b){
    return a + b;
    
}

let num = [1, 2, 3, 4, 5];

let result = funName(num, add);
console.log(result)