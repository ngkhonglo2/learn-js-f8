/*
    Đệ quy: là một hàm gọi lại chính nó 

    Vấn đề của đệ quy:
    1. Xác định được điểm dừng
    2. Logic handle => tạo ra điểm dừng
*/

// function countDown(num){
//     if(num > 0){
//         console.log(num);
//         return countDown(num - 1)
//     }
//     return num;
// }
// countDown(10);


// function loop(start, end, cb){
//     if(start < end){
//         cb(start)
//         return loop(start + 1, end, cb);
//     }
// }
// var array = ['Javascript', 'PHP', 'Ruby'];

// loop(0, array.length, function(index){
//     console.log(array[index]);
// });


// Để giải quyết bài toán giai thừa ta có ví dụ 
// function giaiThua(num){
//     var output = 1;
//     for(var i = num; i > 0; i--){
//         output = output * i;
//     }
//     return output;
// }
// console.log(giaiThua(6));
// or
// function giaiThua(number){
//     if(number > 0){
//         return number *  giaiThua(number - 1);
//     }
//     return 1;
// }
// console.log(giaiThua(6));