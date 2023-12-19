
let number_list = []; //tuscias masyvas

// ciklas generoja skaiciu nuo 0 iki 100 ir prideda i masyma kurio ilgys = 100
for (let i = 0; i < 1e3; i++) {

    let random_number = Math.floor(Math.random() * 1e4);
    number_list.push(random_number)
}
//parodo sugenerota masyva 
console.log(number_list)

//skaicioja laika start
console.time("findMax");

function finMax(number_list) {

    let max_number = []
   
    for (let num of number_list) {
        if (max_number < num) {
            max_number = num;
        }
    }

    return max_number;
}
let result = finMax(number_list)

console.timeEnd("findMax");
console.log('Max number is ', result)


