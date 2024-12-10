// 获取提交按钮和留言框
const submitButton = document.getElementById('submitButton');
const commentBox = document.getElementById('commentBox');
const commentList = document.getElementById('commentList');

// 提交留言的功能
submitButton.addEventListener('click', function() {
    const commentText = commentBox.value.trim();

    // 如果留言框为空，则不做处理
    if (commentText === "") {
        alert("请输入留言内容！");
        return;
    }

    // 创建一个新的留言元素
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.textContent = commentText;

    // 将新留言添加到留言列表
    commentList.appendChild(newComment);

    // 清空留言框
    commentBox.value = "";
});

