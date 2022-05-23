// Object trong javascript
// var myInfo = {
//     name: 'Phong Nguyen',
//     age: 18,
//     address: 'Ha Noi, VN'
// };
// console.log(myInfo.name);
// cách 2
// console.log(myInfo['address']);


// Object trong javascript
// var myInfo = {
//     name: 'Phong Nguyen',
//     age: 18,
//     address: 'Ha Noi, VN'
// };
// var myKey = 'address';
// console.log(myInfo[myKey]);


// var emailKey = 'email';
// var myInfo = {
//     name: 'Phong Nguyen',
//     age: 18,
//     address: 'Ha Noi, VN',
//     [emailKey]: 'bongdem30101998@gmail.com'
// };
// // xóa đi 1 key value trong object
// delete myInfo.age;
// console.log(myInfo);


// var emailKey = 'email';
// var myInfo = {
//     name: 'Phong Nguyen',
//     age: 18,
//     address: 'Ha Noi, VN',
//     [emailKey]: 'bongdem30101998@gmail.com',
//     getName: function(){
//         return this.name;
//     }
// };
// key trong function --> phương thức / method
// Others --> thuộc tính / property
// console.log(myInfo.getName());


/*
Object constructor : Xây dựng một đối tượng trên hàm
*/
// function User(firstName, lastName, avatar){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     console.log(this);

//     this.getName = function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// var author = new User('Son', 'Dang', 'Avatar');
// var user = new User('Phong', 'Nguyen', 'Avatar');

// author.title ='Chia sẻ dạo tại F8';
// user.comment = 'liệu có khóa asp.net k ad';

// console.log(author.getName());
// console.log(user.getName());


/*
Object prototype - Basic

1. Prototype: là nguyên mẫu để cấu thành lên những đối tượng của một hàm tạo
2.Sử dụng khi nào
 */
// function User(firstName, lastName, avatar){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// User.prototype.className = 'F8';
// User.prototype.getClassName = function(){
//     return this.className;
// }


// var user = new User('Son', 'Dang', 'Avatar');
// var user2 = new User('Phong', 'Nguyen', 'Avatar');


// console.log(user.className);
// console.log(user2.getClassName());
