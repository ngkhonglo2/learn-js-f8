/** LÀM VIỆC VỚI CHUỖI 
 * tra Keyword: javascript string methods để tìm hiểu thêm
 * 1. Length
 * 2. Find index
 * 3. Cut string
 * 4. Replace
 * 5. Convert to upper case
 * 6. Convert to lower case
 * 7. Trim
 * 8. Split
 * 9. Get a character by index
 * */ 

// var myString = 'hoc JS tai JS JS F8!';
// 1.lenght: kiểm tra độ dài của chuỗi
// console.log(myString.length);

// 2.find index: Tìm vị trí của kí tự lằm trong 1 chuỗi
// Sử dụng indexOf
// console.log(myString.indexOf('JS'));
// console.log(myString.indexOf('JS',6));// tìm JS ở vị trí sau JS đầu tiên 
// console.log(myString.lastIndexOf('JS'));//tìm JS ở vi trí cuối cùng
// Sử dụng search khác với indexOf là ko hỗ trợ phương thức thứ 2 để quy định vị trí tìm kiếm
// khác thứ 2 với search hỗ trợ tìm kiếm theo biểu thức chính quy
// console.log(myString.search('JS'));

// 3. Cut string: Cắt một kí tự hoặc một đoạn kí tự bất kì trong chuỗi
// sử dụng slice
// console.log(myString.slice(4));

// 4.Replace: thay thế chuỗi
// console.log(myString.replace('JS', 'javascript'));
// console.log(myString.replace(/JS/g, 'javascript'));//biểu thức chính quy giúp thay thế tất cả JS thành javascript

// 5.Convert to upper case: biến đổi tất cả biến trong chuỗi thành chữ in hoa
// console.log(myString.toUpperCase());

// 6.convert to lower case: biến đổi tất cả biến trong chuỗi thành chữ in thường
// console.log(myString.toLowerCase());

// 7. Trim: Giúp loại bỏ các kí tự khoảng trắng thừa ở hai đầu 
// console.log(myString.trim());

// 8.Split: Giúp cắt một String thành một Array
// var languages = 'javascript, PHP, Ruby';
// console.log(languages.split(', '));
// const array = ['phong', 'Nguyen']