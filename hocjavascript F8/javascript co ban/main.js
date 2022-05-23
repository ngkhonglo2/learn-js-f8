// var fullName = 'Nguyen Tat Phong';
// var age = 23;

// alert(fullName);
// alert(age);

// confirm(fullName)
// prompt(fullName)

// setTimeout(function(){
//     alert('thong bao')
// }, 1000)



/*
Kiểu dữ liệu Boolean
*/ 

// var a = 1;
// var b = 2;
// var isSuccess = a > b;
// console.log(isSuccess);


/*
 Một số điều cần biết về function

 1. Khi function đặt trùng tên?
 2. Khai báo biến trong hàm?
 3. Định nghĩa hàm trong hàm?
 */

// 1.Khi function đặt trùng tên
// function showMessages(){
//     console.log('Message 1');
// }
// function showMessages(){
//     console.log('Message 2');
// }
// showMessages();
// kết luận khi gọi 2 hay nhiều function cùng tên thì chỉ có function sau cùng được định nghĩa và thực thi

// 2. Khai báo biến trong hàm
//vẫn có thể khai báo biến trong hàm nhưng phạm vi hoạt động của nó chỉ ở trong function đó
// function showMessages(){
//     var fullName = 'Phong Nguyen';
//     console.log(fullName);
// }
// showMessages()

// 3. Định nghĩa hàm trong hàm
// Vẫn có thể định hàm trong hàm nhưng phạm vi hoạt động của nó chỉ ở trong function đó
// function showMessages(){
//     function showMessages2(){
//         console.log('Message 2');
//     }
//     showMessages2()
// }
// showMessages()

/*
Polyfill
Đây là thuật ngữ dùng để chỉ các đoạn code được dùng để cung cấp một chức năng (hoặc công nghệ) của các trình duyệt hiện đại cho các trình duyệt cũ. Thông qua đó, các trang web sử dụng các công nghệ mới (như HTML5) có thể chạy ổn định trên các trình duyệt cũ chưa hỗ trợ.
*/

/*
    includes method
*/ 
// Sử dụng với chuỗi
// var title = 'Responsive web design';
// console.log(title.includes('Responsive'));

// Sử dụng với Array
// var courses =['javascript', 'PHP', 'Dart'];
// console.log(courses.includes('Javascript, 1'));