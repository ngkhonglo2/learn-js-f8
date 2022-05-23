/*
    Optinal chaining(?.)
    giải quyết vấn đề khi không thực sự chắc chắn đối tượng đó có tồn tại hay không
*/ 
// thông thường
// const obj = {
//     name: 'Alice',
//     cat: {
//         name: 'Dinah',
//         cat2: {
//             name: 'Dinah 2',
//             cat3: {
//                 name: 'Dinah 3'
//             }
//         }
//     }
// };
// if(obj.cat && 
//     obj.cat.cat2 &&
//     obj.cat.cat2.cat3){
//     console.log(obj.cat.cat2.cat3.name);
// }

// Optinal chaining
// const obj = {
//     name: 'Alice',
//     cat: {
//         name: 'Dinah',
//         cat2: {
//             name: 'Dinah 2',
//             cat3: {
//                 name: 'Dinah 3'
//             }
//         }
//     }
// };
// if(obj?.cat?.cat2?.cat3){
//     console.log(obj.cat.cat2.cat3.name);
// }
// Sử dụng Optinal chaining khi không thực sự chắc chắn cái key đó có tồn tại hay không

// const obj = {
//     getName(value){
//         console.log(value);
//     }
// }
// obj.getName?.(123);