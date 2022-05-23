/** TOÁN TỬ TRONG JAVASCRIPT
 * 1. toán tử số học - Arithmetic
 * 2. toán tử chuỗi - String operator 
 * 3. toán tử gán - Assignment
 * 4. toán tử so sánh - Comparion
 * 5. toán tử logic - Logical
 */


/*
Toán tử số học
*/ 
// 1. toán tử cộng tương tự với - * / ** %
// var a = 1;
// var b = 2;
// var c = a + b;
// console.log(c);

// 2.toán tử ++ tương tự với --
// var a = 5;
// a++;
// a++;
// console.log(a);

// toán tử ++ -- Prefix(tiền tố) & Postfix(hậu tố)

// prefix
// var a = 6;
// // việc 1: +1 cho a, a = a + 1 +> a = 7
// // việc 2: trả về sau khi được +1
// var output = ++a;
// console.log('output: ', output);

// postfix
// var a = 6;
// // việc 1: `a copy`,`a copy` = 6
// // việc 2: - 1 của a, a = a - 1  => a = 5
// // việc 3: trả về `a copy`
// var output = a--;
// console.log(output);

/*
Toán tử gán
*/

// var a = 1;

// a += 2;
// console.log(a);

/* 
Toán tử chuỗi - String operator 
*/

// var firsName = 'Phong';
// var lastName = 'Nguyen';

// console.log(firsName + ' ' + lastName);

/*
Toán tử so sánh
*/ 

// var a = 1;
// var b = 2;
// // tương tự thay với các toán tử còn lại vào if
// if(a >= b){
//     console.log('dieu kien dung');
// }else{
//     console.log('dieu kien sai');
// }

/*
Toán tử logic
1. && - And
2. \\ - Or
3. ! - Not
*/

// var a = 1;
// var b = 2;
// var c = 3;

// if(a > 0 || b < 0 || c < 0){
//     console.log('DIEU KIEN DUNG');
// }

// ! - not
// var a = 1;
// var b = 2;
// var c = 3;

// if(!(a < 0)){
//     console.log('DIEU KIEN DUNG');
// }

/*
Toán tử so sánh p2
*/ 
/**
 * === : so sánh bằng tuyệt đối
 * !== : so sánh ko bằng tuyệt đối
 */

// var a = 1;
// var b = '1';
// console.log(a !== b);

// Hiểu hơn về câu lệnh điều kiện
// và phép so sánh

// var a = 1;
// var b = 2;
// var result = a < b;
// console.log('result', result);
//  if(result){
//     console.log('A < B');
//  }else{
//     console.log('A >= B');
//  }

// thay toán tử logic && vào thì nó chỉ trả về kết quả của một trong hai vế tùy vào từng trường hợp xảy ra
// var a = 1;
// var b = 2;

// var result = a < b && a < 0; // ra false là kết quả của phép so sánh thứ 2
// console.log(result);

// thay toán tử logic || ngược với  && cứ khác 6 đk "0, flase NaN undefined null '' " là lấy luôn
// var a = 1;
// var b = 2;

// var result = null || 'B' || 'C';
// console.log('result', result);

/*
Toán tử 3 ngôi - Ternary operator
*/ 

// bình thường
// var course = {
//     name: 'Javascript',
//     coin: 250
// }
// if(course.coin > 0){
//     console.log(`${course.coin} coin`);
// }else{
//     console.log('miễn phí');
// }
// Sử dụng toán tử 3 ngôi
// var course = {
//     name: 'Javascript',
//     coin: 0
// }
// var result = course.coin > 0 ? `${course.coin} coin` : 'miễn phí';
// console.log(result);

// var a = 1;
// var b = 2;
// var c = a > 0 ? a : b;
// console.log(c);
// Lưu ý chỉ sử dụng toán tử 3 ngôi với những trường hợp gán biến đơn giản