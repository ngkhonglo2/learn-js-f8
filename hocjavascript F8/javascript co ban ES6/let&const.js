/*
    Phân biệt giữa var let const
    1. Khác nhau giữa var / let, const 
    - scope: phạm vi truy cập 
    - hosting: đưa lên trên đầu
    let và const ko hỗ trợ hosting
    2. Khác nhau giữa const / var, let
    - Assignment: gán lại giá trị cho biến

    * khi nào sử dụng 
    - khi code thuần: var
    - Babel: const, let
    + Khi định nghĩa biến và không gán lại biến đó: const
    + Khi cần gán lại cho biến: let
*/ 

// 1. var / let, const
// - phạm vi truy cập
// {
//     var course =  'Javascript basic';
// }
// console.log(course);
// Khi console.log ra bên ngoài block thì không thể truy cập được biến let and const

// - hosting var được hỗ trợ hosting nó sẽ nhấc định nghĩa biến lên trên đầu
// a = 1
// var a;
// console.log(a);

// 2. const / var, let
// - Assignment
// var a = 1;//let tương tự var
// a = 100;
// console.log(a);
// Đối với const thì không thể sử dụng toán tử gán lại biến lần 2 với nó