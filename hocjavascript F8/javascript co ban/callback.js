/*
    Callback?
    là hàm (function) được truyền qua đối số khi gọi hàm khác

    1. là hàm
    2. Được truyền qua đối số
    3. Được gọi lại (trong hàm nhận đối số)
*/ 

// let stringne = 'TOi dang hoc callback'
// let sone = 1234
// let stringocallback = 'bomay ne'

// function myCallback(value1, value2 ){
//     console.log('Value: ', value1);
//     console.log('Value2: ', value2);
// }

// function myFunction( text2, sone, callback){
//     callback(stringne, sone)
// }

// myFunction(stringne, sone,function () {
//     console.log(stringne, sone)
// });

// array.map(() => {
//     redf
// })
// b1: chạy myFunction()
// b2: chạy callback => myCallback

/*
 Sử dụng callback với map
*/

// var courses = [
//     'javascript',
//     'PHP',
//     'Ruby'
// ];

// var html = courses.map(function(course){
//     return `<h2>${course}</h2>`;
// });

// console.log(html.join(''));

// Ví dụ nếu ta sử dụng từ khóa là map2 thì sẽ bị lỗi vì nó chưa đc định nghĩa để chạy đc map2 ta làm như sau
// Array.prototype.map2 = function(callback){
//     var output = [];
//     var arrayLength = this.length;
//     for(var i = 0; i < arrayLength; ++i){
//     var result = callback(this[i], i)
//     output.push(result)
//     }
//     return output;
// }
// var courses = [
//     'javascript',
//     'PHP',
//     'Ruby'
// ];
// var htmls = courses.map2(function(course){
//     return `<h2>${course}</h2>`;
// });
// console.log(htmls.join(''));


/*
 Sử dụng callback với forReach
*/

// var courses = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];
// courses.length = 1000;
// console.log(courses);
// courses.forEach(function(course, index, array){
//     console.log(course, index, array);
// })

// forReach2
// var courses = new Array(100);
// courses.push('javascript', 'Ruby')

// Array.prototype.forEach2 = function(callback){
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             callback(this[index], index, this);
//         }
//     }
// }

// courses.forEach2(function(course, index, array){
//     console.log(course, index, array);
// })

/*
 Sử dụng callback với filter
*/

// var courses = [
//     {
//         name: 'javascript',
//         coin: 680
//     },
//     {
//         name: 'PHP',
//         coin: 860
//     },
//     {
//         name: 'Ruby',
//         coin: 980
//     }
// ];

// var filterCourses = courses.filter(function(course){
//     return course.coin> 700;
// });
// console.log(filterCourses);

// filter2
// var courses = [
//     {
//         name: 'javascript',
//         coin: 680
//     },
//     {
//         name: 'PHP',
//         coin: 860
//     },
//     {
//         name: 'Ruby',
//         coin: 980
//     }
// ];
// Array.prototype.filter2 = function(callback){
//     var output = [];
//     for (var index in this){
//         if(this.hasOwnProperty(index)){
//             var result = callback(this[index], index, this)
//             if(result){
//                 output.push(this[index])
//             }
//         }
//     }
//     return output
// }

// var filterCourses = courses.filter2(function(course){
//     return course.coin> 700;
// });
// console.log(filterCourses);

/*
Sử dụng callback với some
*/
// var courses = [
//     {
//         name: 'javascript',
//         coin: 680,
//         isFinish: true
//     },
//     {
//         name: 'PHP',
//         coin: 860,
//         isFinish: false
//     },
//     {
//         name: 'Ruby',
//         coin: 980,
//         isFinish: false
//     }
// ];

// var result = courses.some(function(course, index){
//     return course.isFinish;
// });
// console.log(result);

// some2
// var courses = [
//     {
//         name: 'javascript',
//         coin: 680,
//         isFinish: true
//     },
//     {
//         name: 'PHP',
//         coin: 860,
//         isFinish: false
//     },
//     {
//         name: 'Ruby',
//         coin: 980,
//         isFinish: false
//     }
// ];
// Array.prototype.some2 = function(callback){
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//            if (callback(this[index], index, this)){
//               return true; 
//            }
//         }
//     }
//     return false;
// }

// var result = courses.some2(function(course, index){
//     return course.isFinish;
// });
// console.log(result);

/*
    Sử dụng callback với Every
*/ 
// var courses = [
//     {
//         name: 'javascript',
//         coin: 680,
//         isFinish: true
//     },
//     {
//         name: 'PHP',
//         coin: 860,
//         isFinish: true
//     },
//     {
//         name: 'Ruby',
//         coin: 980,
//         isFinish: true
//     }
// ];
// var rsesult = courses.every(function(course, index){
//     return course.isFinish;
// });
// console.log(rsesult);

// every2
// var courses = [
//     {
//         name: 'javascript',
//         coin: 680,
//         isFinish: true
//     },
//     {
//         name: 'PHP',
//         coin: 860,
//         isFinish: true
//     },
//     {
//         name: 'Ruby',
//         coin: 980,
//         isFinish: false
//     }
// ];
// Array.prototype.every = function(callback){
//     var output = true;
//     for(var index  in this){
//         if(this.hasOwnProperty(index)){
//             var result = callback(this[index], index, this);
//             if(!result){
//                 output = false;
//                 break;
//             }
//         }
//     }
//     return output
// }

// var rsesult = courses.every(function(course, index){
//     return course.isFinish;
// });
// console.log(rsesult);