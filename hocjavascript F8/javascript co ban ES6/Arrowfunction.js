/*
    Arrow function: hàm mũi tên
*/ 

// Với hàm function thông thường 
// function logger(log){
//     console.log(log);
// }
// logger('Message...')

// Arrow function
// const logger = (log) => {
//     console.log(log);
// }
// logger('Message...')


// const sum = (a, b) =>{
//     return a + b;
// }
// console.log(sum(2, 2));
// Viết ngắn hơn 
// const sum = (a, b) => a + b;
// console.log(sum(2, 2));
// khi viết trực tiếp cái gì sau dấu => thì nó sẽ được hiểu là return trừ khi viết {}
// muốn return trực tiếp mà không cần viết return trong dấu {} thì ta có
// const sum = (a, b) => ({a: a, b: b});
// console.log(sum(2, 2));

// khi chỉ có 1 tham số nhận vào ta có thể bỏ () đi
// const logger = log => console.log(log);
// logger('Message...')

/*
    Đặc tính của Arrow function
*/ 
// với function thông thường
// const course = {
//     name: 'Javascript basic!',
//     getName: function(){
//         return this;// context học ở khóa nâng cao
//         // this ở đây được hiểu là course
//     }
// };
// console.log(course.getName());

// với arrow function thì không có context
// const course = {
//     name: 'Javascript basic!',
//     getName: () => {
//         return this;
//         // this ở đây được hiểu là course
//     }
// };
// console.log(course.getName());


/*
    *Lưu ý: không thể dùng arrow function làm function constructor được 
*/
// const Course = function(name, price){ //nếu thay function constructer thành arrow function thì nó sẽ lỗi
//     this.name =  name;
//     this.price = price;
// }
// const jsCourse = new Course('Javascript', 1000)
// console.log(jsCourse);