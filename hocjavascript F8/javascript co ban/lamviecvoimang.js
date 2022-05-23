/*
Làm việc với Array

1. To string
2. Join
3. Pop
4. Push
5. Shift
6. Unshift
7. Splicing
8. Concat
9. Slicing
*/ 

// 1. toString: chuyển dữ liệu từ Array sang String
// var languages = [
//     'javascript',
//     'PHP',
//     'Ruby'
// ];
// console.log(languages.toString());

// 2. Join: giống như toString nhưng có thể thay đổi dấu phẩy bằng các kí tự khác
// console.log(languages.join(', '));

// 3. Pop: Xóa đi phần tử ở cuối mảng và trả về phần tử đã xóa
// console.log(languages.pop());
// console.log(languages);

// 4.push: thêm một hay nhiều phần tử ở cuối mảng
// console.log(languages.push('Dart'));

// 5. Shift: Xóa đi phần tử ở đầu mảng và trả về phần tử đã xóa

// 6. Unshift: thêm một hay nhiều phần tử ở đầu mảng
// console.log(languages.unshift('Dart'));

// 7. Splicing: có thể xóa, cắt, chèn phần tử mới vào mảng
// languages.splice(1, 0, 'Dart');//(vị trí sẽ chèn, có xóa ptu nào ko, chèm ptu )
// console.log(languages);

// 8. concat:  hàm để nối Array với nhau
// var languages = [
//     'javascript',
//     'PHP',
//     'Ruby'
// ];
// var languages2 = [
//     'Dart',
//     'Ruby'
// ];
// console.log(languages.concat(languages2));

// 9. slicing: để cắt toàn bộ hoặc vài element
// var languages = [
//         'javascript',
//         'PHP',
//         'Ruby'
//     ];
//     console.log(languages.slice(1, 2));