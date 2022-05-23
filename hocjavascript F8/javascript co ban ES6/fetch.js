/*
    fetch: tìm và lấy dữ liệu back end trả về
    hiện nay ngành web chia làm 2 phướng
    1. Front-end: Xây dựng giao diện người dùng
    2. Back-end: Xây dựng logic xử lý + cơ sở dữ liệu

    Fetch sẽ làm nv gọi lên API để lấy ra những nội dung được lưu trữ ở phía back-end
    và front-end sẽ nhận những  nội dung đó và hiển thị ra trình duyệt.

    API(URL): viết tắt của từ Application programing interface
    - Cổng giao tiếp giữa các phần mềm

    backend -> API -> fetch -> JSON/XHL -> JSON.parse -> Javazcript types -> Reder ra giao dienj với HTML
*/ 

var postApi = 'https://jsonplaceholder.typicode.com/posts';

fetch(postApi)
    .then(function(response){
        return response.json();
        // response.json sẽ nhận dữ liệu từ response được trả về và nó sẽ về cho bạn 1 promise khi json nó sẽ trả về javscript types
        // tức là JSON.parse --> Javascript types
    })
    .then(function(posts){
        var htmls = posts.map(function(post){
            return `<li>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            </li>`;
        });

        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
        // console.log(html);
    })
    .catch(function(err){
        alert('co loi')
    })


