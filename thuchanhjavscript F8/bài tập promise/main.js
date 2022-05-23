/*
    Promise example - Ví dụ sử dung promise
*/

var users = [
    {
        id: 1,
        name: 'kien Dam',
    },
    {
        id: 2,
        name: 'Son Dang',
    },
    {
        id: 3,
        name: 'Hung Dam'
    }
];
var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Son chua ra video :('
    },
    {
        id: 2,
        user_id: 2,
        content: 'Anh Son vua ra video :('
    },
    {
        id: 3,
        user_id: 3,
        content: 'moi ra duoc 1 nua :('
    }
];
/*
    1. Lấy comments
    2. Từ comments lấy ra user_id, từ user id lấy ra user tương ứng
*/
// Fake API
function getComments(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comments);
        }, 1000);
    });
}
function  getUsersByIds(userIds){
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            return userIds.includes(user.id)
        });
        setTimeout(function(){
            resolve(result);
        }, 1000);
    });
}

getComments()
    .then(function(comments){
        var userIds = comments.map(function(comment){
            return comment.user_id;
        });
        return getUsersByIds(userIds)
            .then(function(users){
                return {
                    users: users,
                    comments: comments
                }
            })
        })
        .then(function(data){
            
            var commentBlock = document.getElementById('comment-block');
            var html = '';
            data.comments.forEach(function(comment){
                var user = data.users.find(function(user){
                    return user.id === comment.user_id;
                });
                html += `<li>${user.name}: ${comment.content}</li>`;
            })
            commentBlock.innerHTML = html;
        });


