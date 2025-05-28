document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        const modal = document.querySelector('.modal');
        const modalImg = modal.querySelector('.modal-img');

        modalImg.src = imgSrc;
        modal.classList.add('active');
    });
});
// 关闭模态框
document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('active');
});
// 点击背景关闭
document.querySelector('.modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        e.currentTarget.classList.remove('active');
    }
});
// ESC键关闭
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelector('.modal').classList.remove('active');
    }
});