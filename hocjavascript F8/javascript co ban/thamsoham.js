//Tham số hàm - javascript cơ bản

/*
1. Tham số?
    -định nghĩa?
    -kiểu dữ liệu?
    -tính private?
    -1 tham số
    -nhiều tham số

2. Truyền tham số
    -1 tham số
    - Nhiều tham số

3. Arguments?
    - Đối tượng trong arguments
    - Giới thiệu vòng for
*/ 

// 1 vs 2 tham số và truyền tham số
// function writeLog(message, message2){
//     if (message) {
//         console.log(message);
//     }
//     if (message2) {
//         console.log(message2);
//     }
// }
// writeLog('log1', 'log2');

// 3. Arguments
// function writeLog(){
//     console.log(arguments);
// }
// writeLog('log1', 'log2', 'log3')
// vòng for
// function writeLog(){
//     for(var param of arguments){
//         console.log(param);
//     }
// }
// writeLog('log1', 'log2', 'log3')
//in ra dòng log cách nhau bằng dấu "-"
// function writeLog(){
//     var myString = '';
//     for(var param of arguments){
//         myString += `${param} - `
//     }
//     console.log(myString);
// }
// writeLog('log1', 'log2', 'log3')