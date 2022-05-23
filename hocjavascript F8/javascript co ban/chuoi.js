/*
CHUỖI TRONG JAVASCRIPT
1. Tạo chuỗi
    - Các cách tạo chuỗi
    - Nên dùng cách nào? Lý do?
    - Kiểm tra data type
2. Một số case sử dụng backslash (\)
3. Xem độ dài chuỗi
4. Chú ý độ dài khi viết Code
5. Template string ES6
*/ 

// 1. tạo chuỗi
// // * cách 1 dùng cách 1
// var fullName = 'Phong nguyen';
// // * cách 2
// var fullName = new String('Phong Nguyen');
// console.log(typeof fullName);

// 2. Một số case sử dụng backlash (\)
// var fullName = 'toi la \'sieu nhan\'';
// console.log(fullName);

// 3. Xem độ dài chuỗi
// var fullName = "Phong Nguyen";
// console.log(fullName.length);

// 4. Chú ý độ dài khi viết code
// Nên sử dụng kí tự trên 1 dòng là 80
// var fullName = "một số case sử dụng  backslash"
//  + " " + "Một số case sử dụng backslash" 
//  + " " + "backslash Một số case sử dụng backslash";
// console.log(fullName);

// 5. Template string ES6
// var firstName = 'Phong';
// var lastName = 'Nguyen';
// console.log(`toi la: ${firstName} ${lastName}`);
