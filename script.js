// 获取提交按钮和留言框
const submitButton = document.getElementById('submitButton');
const commentBox = document.getElementById('commentBox');
const commentList = document.getElementById('commentList');

// 从 localStorage 获取已有的留言
const savedComments = JSON.parse(localStorage.getItem('comments')) || [];

// 渲染留言列表
function renderComments() {
    commentList.innerHTML = '';
    savedComments.forEach(commentText => {
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
    });
}

// 提交留言的功能
submitButton.addEventListener('click', function() {
    const commentText = commentBox.value.trim();

    // 如果留言框为空，则不做处理
    if (commentText === "") {
        alert("请输入留言内容！");
        return;
    }

    // 添加留言并保存到 localStorage
    savedComments.push(commentText);
    localStorage.setItem('comments', JSON.stringify(savedComments));

    // 渲染留言列表
    renderComments();

    // 清空留言框
    commentBox.value = "";
});

// 初始化页面时渲染留言
renderComments();

