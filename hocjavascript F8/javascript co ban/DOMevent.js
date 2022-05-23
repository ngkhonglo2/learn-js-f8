/*
    DOM events

    1. Attribute event
    2. Assign event using the element node
*/ 

// var h3Elements = document.querySelectorAll('h3');
// for(var i = 0; i < h3Elements.length; i++){
//     h3Elements[i].onclick = function(e){
//         console.log(e.target);
//     }
// }

/*
    1. Input / select
    2. Key up / down
*/ 

// 1. Input / select
// * Input
// var inputValue;
// var inputElement = document.querySelector('input[type = "text"]')
// inputElement.oninput = function(e){
//     inputValue = e.target.value;
// }

// var inputElement = document.querySelector('input[type = "checkbox"]')
// inputElement.onchange = function(e){
//     console.log(e.target.checked);
// }

// *select 
// var inputElement = document.querySelector('select')
// inputElement.onchange = function(e){
//     console.log(e.target.value);
// }

// 2. Key up / down

// var inputElement = document.querySelector('input[type = "text"]')
// inputElement.onkeyup = function(e){
//     console.log(e.which);

//     switch(e.which){
//         case 16:
//             console.log('shift');
//             break
//     }
// }

// document.onkeydown = function(e){
//     switch(e.which){
//         case 32:
//             console.log('Exit');
//             break
//     }
// }


/*
    1. preventDefault
    2. stopPropagation
*/ 
// 1. preventDefault: ngăn chặn hành vi mặc định
// var aElement = document.links;
// for(var i = 0; i < aElement.length; ++i){
//     aElement[i].onclick = function(e){
//         if(!e.target.href.startsWith('https://f8.edu.vn')){
//             e.preventDefault();
//         }
//     }
// }

// var ulElement = document.querySelector('ul')

// ulElement.onmousedown = function(e){
//     e.preventDefault();
// }

// ulElement.onclick = function(e){
//     console.log(e.target);
// }

// 2.stopPropagation: ngăn chặn tình trạng nổi bọt
// document.querySelector('.abc').onclick = 
// function(){
//     console.log('DIV');
// }

// document.querySelector('button').onclick = 
// function(e){
//     e.stopPropagation();
//     console.log('Click me!');
// }

/*
    DOM event / Event listener
    so sánh khi thực hiện
    1. Xử lý  nhều việc khi  event xảy ra
    2. Lắng nghe / hủy bỏ lắng nghe
*/ 
// với DOM event
// * lắng nghe
// var btn = document.getElementById('btn')
// setTimeout(function(){
//     btn.onclick = function(){
//         console.log('Viec 1');
    
//         console.log('Viec 2');
    
//          alert('Viec 3')
//     }
// }, 3000)
// * Hủy bỏ lắng nghe
// var btn = document.getElementById('btn')

//     btn.onclick = function(){
//         console.log('Viec 1');
    
//         console.log('Viec 2');
    
//          alert('Viec 3')
//     }

//     setTimeout(function(){
//         btn.onclick = function(){

//         }
//     }, 3000)

// Với event Litstener
// * Lắng nghe
// var btn = document.getElementById('btn')
// btn.addEventListener('click', function(){
//     console.log('Event 1');
// })
// btn.addEventListener('click', function(){
//     console.log('Event 2');
// })
// btn.addEventListener('click', function(){
//     console.log('Event 3');
// })

// var btn = document.getElementById('btn')
// function viec1(){
//     console.log('Viec 1');
// }
// function viec2(){
//     console.log('Viec 2');
// }
// btn.addEventListener('click', viec1)
// btn.addEventListener('click', viec2)

// setTimeout(function(){
//     btn.removeEventListener('click', viec1)
// }, 3000)