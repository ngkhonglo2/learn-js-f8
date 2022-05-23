/*
    Promise
    - Syns: đồng bộ 
    - Async: bất đồng bộ
    - Nỗi đau
    - Lý thuyết, cách hoạt động
    - Thực hành, ví dụ
*/ 

// Sync / Async
/*
trong Javascript bản thân nó đã là Sync nên cái nào được in ra trước thì chạy trc
cái nào in ra sau thì chạy sau
*/ 
// console.log(1);
// console.log(2);



/* 
Trong javascipt có những phương thức:
setTimeOut, setInterval, fetch, XMLHttRequest, fill reading
request animation frame là Async
*/
// setTimeout(function(){
//     console.log(1);
// }, 1000);
// console.log(2);


/*
    nỗi đau thì nó có những vấn đề:
    - Callback hell
    - Pyramid of doom
*/ 

// Callback hell
// setTimeout(function(){
//     console.log(1);//viec 1
//     setTimeout(function(){
//         console.log(2);//viec 2
//         setTimeout(function(){
//             console.log(3);//viec 3
//             setTimeout(function(){
//                 console.log(4);//viec 4
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000);

/* 
    Tạo ra 1 promise
    1. new Promise
    2. Executor
*/

// var promise = new Promise(
//     // Executor: khi gọi new Promise thì nó sẽ gọi ngay function trước cả khi nhận đối tượng biến tên promise
//     function(resolve, rejest){
//         // tự viết logic
//         // khi thành công: thì gọi đến resolve()
//         // khi thất bại: thì gọi đến reject()
//         resolve('khong loi')
//     }
// )
// //Sau khi tạo ra được Promise ta sử dụng như sau
// promise
// // nó trả ra 3 phương thức như sau
//     .then(function(courses){
//     // khi thằng resolve được gọi thì thằng then này được gọi
//     console.log(courses);
//     })
//     .catch(function(error){
//     // khi thằng reject được gọi thì thằng catch này được gọi
//     console.log(error);
//     })
//     .finally(function(){
//     // khi 1 trong hai thằng resolve or reject được gọi thì thằng finally này được gọi 
//     console.log('Done!');
//     })
/* 
    khi console.log 3 phương thức trên 
    1. pendding: là không gọi đến 1 trong 2 resolve or reject thì nó sẽ ở trạng thái chờ
    Lưu ý: trạng thái pendding sẽ gây rò rỉ bộ nhớ
    2. fulfilled: là khi gọi đến resolve thì nó ở trạng thái thành công lọt vào then and finally
    3. reject: là khi gọi đến reject thì nó ở trạng thái thất bại lọt vào catch and finally
*/

/*
    promise chain
*/ 

// var promise = new Promise(function(resolve){
//         resolve()
// })
// promise
// .then(function(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve([1,2,3])
//         }, 2000)
//     })
// })
// .then(function(data){
//     console.log(data);
//     return 2
// })

// .catch(function(){
//     console.log(error);
// })
// .finally(function(){
//     console.log('Done!');
// })


// function sleep(ms){
//     return new Promise(function(resolve){
//         setTimeout(resolve, ms);
//     });
// }
// sleep(1000)
// .then(function(){
//     console.log(1);
//     return sleep(1000)
// })
// .then(function(){
//     console.log(2);
//     return sleep(1000)
// })
// .then(function(){
//     console.log(3);
//     return sleep(1000)
// })
// .then(function(){
//     console.log(4);
//     return sleep(1000)
// })

/*
    promise method

    1. Promise.resolve
    2. Promise.reject
    3. Promise.all
*/ 

// var promise = Promise.resolve('khong loi'); //muốn lọt vào catch thì thay  resolve = reject
// promise
//     .then(function(result){
//         console.log('result: ', result);
//     })
//     .catch(function(err){
//         console.log('err: ', err);
//     })

// 3. Promise.all: giúp chạy song song các promise
// var promise1 = new Promise(function(resolve){
//     setTimeout(function(){
//         resolve([1])
//     },1000)
// });
// var promise2 = new Promise(function(resolve){
//     setTimeout(function(){
//         resolve([2,3])
//     },2000)
// });
// Promise.all([promise1, promise2])
// .then(function([result1, result2]){
//     console.log(result1.concat(result2));
// })

// nếu 1 phần tử có lỗi
// var promise1 = new Promise(function(resolve){
//     setTimeout(function(){
//         resolve([1])
//     },1000)
// });
// var promise2 = Promise.reject('có lỗi')
// Promise.all([promise1, promise2])
// .then(function([result1, result2]){
//     console.log(result1.concat(result2));
// })

// .catch(function(error){
//     console.log(error);
// })