/*
Mảng trong javascript - Array

1. Tạo mảng
    - Cách tạo
    - Sử dụng cách nào? Tại sao?
    - Kiểm tra data type?
2. Truy xuất mảng 
    - Độ dài mảng
    - Lấy phần tử theo index
*/ 

// 1. Tạo mảng
// Array có thể chứa được tất cả các kiểu dữ liệu trong javascript
// var languages = [
//     'javascript',
//     'PHP',
//     'Ruby',
//     'Dart',
//     null,
//     undefined,
//     function(){

//     },
//     {},
//     123
// ];
// console.log(languages);
// console.log(Array.isArray(languages));//kiểm tra xem có phải là Array ko

// 2. Truy xuất mảng
// var languages = [
//     'javascript',
//     'PHP',
//     'Ruby',
//     'Dart'
// ];

// console.log(languages.length);

// console.log(languages[2]);//lấy phần tử theo index


/*
    Array methods:
Làm việc với Array
        forEach()
        every()
        some()
        find()
        filter()
        map()
        reduce()
*/ 

// forEach(): duyệt qua các phần tử của mảng
// every(): kiểm tra tất cả các phần tử thuộc 1 mảng phải thỏa mãn 1 đk nào đó mới trả về true
// var courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 0
//     },
//     {
//         id: 2,
//         name: 'HTML, CSS',
//         coin: 1
//     },
//     {
//         id: 3,
//         name: 'Ruby',
//         coin: 1
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 200
//     },
//     {
//         id: 5,
//         name: 'ReactJS',
//         coin: 1
//     }
// ];
// var course = courses.every(function(course, index){
//     return course.coin === 0;
// });
// console.log(course);

// some(): ngược lại với every chỉ cần 1 đk đúng sẽ trả về true
// find(): Kiểm tra Tìm kiếm các phần tử trong mảng ko có sẽ trả về undefined
// filter(): Giống find nhưng nó sẽ trả về tất cả các phần tử thỏa mãn đk
// map(): Thêm các phần tử vào các element 
// var courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 0
//     },
//     {
//         id: 2,
//         name: 'HTML, CSS',
//         coin: 1
//     },
//     {
//         id: 3,
//         name: 'Ruby',
//         coin: 1
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 200
//     },
//     {
//         id: 5,
//         name: 'ReactJS',
//         coin: 1
//     }
// ];
// var course = courses.map(function(course, index){
//     // console.log(course);
//     return{
//         id: course.id,
//         name: `khoa hoc: ${course.name}`,
//         coin: course.coin,
//         coinText: `Gia: ${course.coin}`,
//         index: index,
//         originArray: courses
//     }
// });
// console.log(course);

