/*
    1. Let, const --> let&const.js
    2. template Literals --> 17
    3. Multi-line String --> 36
    4. Arrow function --> Arrowfunction.js
    5. Classes --> classes.js
    6. Enhanced object literals --> 52
    7. Default parameter values --> 100
    8. Destructuring --> 120
    9. Rest parameters
    10. Spread --> 172
    11. Tagged template literal --> 208
    12. Modules --> 224
*/ 

/*
    2.template literals
    sử dụng kiểu nội suy là có thể viết biến ở trong cặp ngoặc của nó ` `
    * những quy tắc viết trong template string:
    - đối với \ thì ta phải viết \\ mới in ra \
    - \n: sẽ là xuống dòng
    - ${ nó sẽ hiểu là đưa biến vào đây} muốn in ra được thì phải viết \${}
*/ 
// sử dụng toán tử cộng để lối chuỗi thông thường 
//  const courseName = 'Javascript';
//  const description = 'Course name: ' +  courseName;
//  console.log(description);

// với template string
//  const courseName = 'Javascript';
//  const courseName2 = 'PHP';
//  const description = `course name: ${courseName} ${courseName2}`;
//  console.log(description);

/*
    3. Multi-line string: viết nhiều dòng
*/

// viết theo cách thông thường
// const lines = 'Line 1\n'
//     + 'Line 2\n'
//     + 'Line 3\n'
// console.log(lines);

// viết theo Multi-line
// const lines = `Line 1
// line 2
// line 3`
// console.log(lines);

/*
    6. Enhanced object literals đây là 1 khái niệm giúp làm đc những việc sau:
    - Định nghĩa key: value cho object
    - Định nghĩa method cho objet
    - Định nghĩa key cho object dưới dạng biến
*/ 

// * Định nghĩa key: value cho object
// viết code thông thường
// var name = 'Javscript';
// var price = 1000;
// var course = {
//     name: name,
//     price: price
// };
// console.log(course);

// Enhanced object literals
// var name = 'Javscript';
// var price = 1000;
// var course = {
//     name,
//     price
// };
// console.log(course);

// * Định nghĩa method cho objet
// thông thường
// var name = 'Javscript';
// var price = 1000;
// var course = {
//     name,
//     price,
//     getName: function(){//với Enhanced object literals thì chỉ cần viết getName:(){return name}
//         return name;
//     }
// };
// console.log(course.getName);

// * Định nghĩa key cho object dưới dạng biến
// var fieldName = 'new-name';
// var fieldPrice = 'Price';
// const course = {
//     [fieldName]: 'Javascript',
//     [fieldPrice]: 1000
// };
// console.log(course);

/*
    7. Default parameter values: định nghĩa ra những giá trị mặc định cho những tham số
*/ 

// với ES5
// function logger(log){
//     if(typeof log === 'undefined'){
//         log = 'gia tri mac dinh';
//     }
//     console.log(log);
// }
// logger(undefined)

// với ES6 
// trong thực tế khi hàm được định nghĩa ra có những tham số không bắt buộc phải nhập thì mới dùng 
// function logger(log = 'gia tri mac dinh'){
//     console.log(log);
// }
// logger(undefined)

/*
    Destructuring: phân rã
    sử dụng destructuring với object và Array
*/ 
// ví dụ với Array
// làm thông thường 
// var array = ['javascript', 'PHP', 'Ruby'];
// var a = array[0];
// var b = array[1];
// var c = array[2];
// console.log(a, b, c);

// Destructuring
// var array = ['javascript', 'PHP', 'Ruby'];
// var [a, b, c] = array;
// console.log(a, b, c);

// var array = ['javascript', 'PHP', 'Ruby'];
// var [a, ...rest] = array;
// console.log(a);
// console.log(rest);

// ví dụ với Object
// Destructuring
// var course = {
//     name: 'Javscript',
//     price: 1000,
//     image: 'image-address'
// };
// var {name, price} = course;
// console.log(name, price);

// toán tử rest parameters sử dụng với destructuring
// var course = {
//     name: 'Javscript',
//     price: 1000,
//     image: 'image-address'
// };
// var {name, ...rest} = course;
// console.log(name);
// console.log(rest);


// var course = {
//     name: 'Javascript',
//     price: 1000,
//     image: 'image-address',
// };
// var{name, description = 'default description'} =course;
// console.log(name);
// console.log(description);

/*
    Spread: toán tử dải (...) giống rest nhưng công dụng khác nhau
*/ 
// lối mảng
// var array1 = ['Javascript', 'Ruby', 'PHP'];

// var array2 = ['ReactJS', 'Dart'];

// var array3 = [...array2, ...array1];
// console.log(array3);

// lối object
// var object1 = {
//     name: 'javascript'
// };

// var object2 = {
//     price: 1000
// };

// var object3 = {
//     ...object1,
//     ...object2
// }
// console.log(object3);

// sử dụng với hàm
// var array = ['javascript', 'PHP', 'Ruby'];
// // kết hợp với rest
// function  logger(...rest){
//     for(var i = 0; i< rest.length; i++){
//         console.log(rest[i]);
//     }
// }
// // đây là spread
// logger(...array)

/*
    11. Tagged template literal
*/
// function highlight([first, ...strings], ...value){
//     return value.reduce(
//         (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
//         [first]
//     )
//     .join('')
// }
// var brand = 'F8';
// var course = 'Javascript';
// const html = highlight`Học lập trình ${course} tại ${brand}!`;
// console.log(html);

/*
    Modules: là bóc tách hay tập hợp 1 thành phần nào nó
    Import(nạp vào) / Export(xuất ra)
*/ 
