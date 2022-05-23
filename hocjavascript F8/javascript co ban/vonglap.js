/*
    Vòng lặp - Loop
    
    1. for - Lặp với điều kiện đúng
    2. for/in - Lặp qua key của đối tượng
    3. for/of - Lặp qua value của đối tượng
    4. while - Lặp khi điều kiện đúng
    5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
*/ 

// 1. for loop
// for (var i = 0; i < 200; i+= 2){
//     console.log(i);
// }
// hoặc
// var i = 0;
// for (; i < 200; i+= 2){
//     console.log(i);
// }

// for loop để lấy phần tử trong mảng
// var myArray = [
//     'javascript',
//     'PHP',
//     'Java',
//     'Dart',
//     'Ruby',
//     'Python'
// ];
// var arrayLength = myArray.length;
// for(i = 0; i < arrayLength; i++){
//     console.log(myArray[i]);
// }

// 2. for/in loop
// var myInfo = {
//     name: 'Phong',
//     age: 18,
//     address: 'Ha Noi'
// };
/* 
lưu ý: for(biến mới tên biến in biến ban đầu) console.log biến mới sẽ lấy được key của biến ban đầu
 key của Array là số
*/
// for (var key in myInfo){
//     console.log(key);
// };

//để lấy được các value trong key
// for(var key in myInfo){
//     console.log(myInfo[key]);
// }

// 3. for/of loop
// var myInfo = {
//     name: 'Phong',
//     age: 18
// };

// // for(var value of languages){
// //     console.log(value);
// // }

// //để lấy được các key trong value
// for(var value of Object.keys(myInfo)){
//     console.log(value);
// }

// 4. While loop
// var i = 1;
// while(i <= 10){
//     console.log(i);
//     i++;
// }

// var myArray = [
//     'javascript',
//     'PHP'
// ];
// var i = 0;
// while(i < myArray.length){
//     console.log(myArray[i]);
//     i++;
// }

// 5. do/while loop
// var i = 0;
// var isSuccess = false;
// do{
//     i++;
//     console.log('Nạp thẻ lần ' + i);
//     if(false){
//         isSuccess = true;
//     }
// }while(!isSuccess && i <= 3);

/*
Các từ khóa Break & continue in loop
*/
// từ khóa break
// for(var i = 0; i < 10; i++){
//     console.log(i);

//     if(i>=5){
//         break;
//     }
// }

// từ khóa continue
// for(var i = 0; i < 10; i++){
//     if(i%2 !== 0){
//         continue;
//     }
//     console.log(i);
// }

/*
Vòng lặp lồng nhau - Nested loop
*/ 
// var myArray =[
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];

// for(i = 0; i < myArray.length; i++){
//     for(j = 0; j < myArray[i].length; j++){
//         console.log(myArray[i][j]);
//     }
// }

// Thêm ví dụ về vòng lặp
// for(var i = 100; i > 0; i--){
//     console.log(i);
// }

// for(var i =0; i <= 100; i += 5){
//     console.log(i);
// }