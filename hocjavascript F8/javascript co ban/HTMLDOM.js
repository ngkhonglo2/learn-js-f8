/*
    HTML DOM - Document Object Model
*/ 
/* 
    Có 3 thành phần
    1. Element: ID, class, tag name,
    css selection, HTML collection

    2.Attribute
    3.Text
*/
// 1. Element:
// (1) Element: id
// var headingNode = document.getElementById('heading');
// console.log(headingNode);

// (2) Element: class
// var headingNode = document.getElementsByClassName('heading');
// console.log(headingNode);

// (3) Element: tag name
// var headingNode = document.getElementsByTagName('h1');
// console.log(headingNode);
// muốn lấy element thì ta có ví dụ
// var headings = document.getElementsByTagName('h1')
// console.log(headings[0]);

// (4) Element: css Selector
// var headingNode = document.querySelector('.heading');
// console.log(headingNode);

// (5) Element: SelectorAll
// var headings = document.querySelectorAll('.heading')
// console.log(headings[0]);
// nếu có nhiều class ta có ví dụ 
// var headings = document.querySelectorAll('.heading');
// for(var i = 0; i < headings.length; i++){
//     console.log(headings[i]);
// }

// 2. Attribute: 
// là các thuộc tính trong html ví dụ như: id, class, title,...

// 3.Text: 
// là một đoạn chữ trong element trong html ví dụ như trong <h2 id = "heading">HTML DOM</h2> thì HTML DOM là Text node


/*
    DOM attributes 
*/ 
// thêm các attributes cho thẻ h4 
// var headingElement = document.querySelector('h4');
// headingElement.id = 'Heading';
// or
// headingElement.className = 'Heading';
// or
// headingElement.title = 'Heading';

// Muốn thêm một attributes ngẫu nhiên mà tự mình đặc tên vào document ta có 1 phương thức
// headingElement.setAttribute('href', 'heading')

/*
    innerText, textContent
*/ 
// với innerText thì khi lấy ra giá trị thì nội dung lấy được sẽ giống như nội dung nhìn thấy trong trình duyệt web.
// với textContent thì nó sẽ trả về nội dung thật của nó lằm trong DOM 

// var headingElement = document.querySelector('.innertext')
// console.log(headingElement.innerText);
// console.log(headingElement.textContent);

/*
    innerHTML(thêm vào bên trong), outerHTML(thêm vào bên ngoài)
    Thêm element vào trong element
*/ 

// var boxElement = document.querySelector('.box')
// boxElement.innerHTML =  '<h1 title="Heading">New heading</h1>';





















// ------------------------------

// Javacsript: Browser | Server (NodeJS)

// Browser: HTML -> DOM -> Web API

// API - Application Programming Interface