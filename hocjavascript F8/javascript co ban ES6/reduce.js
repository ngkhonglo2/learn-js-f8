// const numbers = [1, 2, 3, 4, 5]

// const result = numbers.reduce((total, number) =>{ // thực tế ở đây ta có thể nhận được 4 tham số (total, number, index, array)
//     return total + number
// }, 10)

// console.log(result);
/*
trong reduce thì nhận 2 đối số (callback, initialValue(giá trị này không bắt buộc))
trong ví dụ trên callback: ((total, number) =>{
    return total + number
})
    initialValue: 10;

 - khi không chuyền initialValue thì callback được gọi thì cái biến tích chữ (total) sẽ là phần tử đầu tiên của mảng còn (number) sẽ là phần tử thứ 2 của mảng
 - khi chuyền initialValue thì callback được gọi thì cái biến tích chữ sẽ là initialvalue còn (number) sẽ là phần tử đầu tiên của mảng
*/

// Code ra reduce mới
Array.prototype.reduce2 = function(callBack, result){
    let i = 0
    if(arguments.length < 2){
        i = 1
        result = this[0]
    }
    for(; i < this.length; i++){
        result = callBack(result, this[i], i, this)
    }
    return result
}

const numbers = [1, 2, 3, 4, 5]
const result = numbers.reduce2((total, number) =>{
    return total + number
})

console.log(result);