function revealSurprise() {
    const surprise = document.getElementById('surprise');
    surprise.style.display = 'block';
    surprise.style.animation = 'fadeIn 1s ease-in-out';

    // إضافة مؤثرات إضافية
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach((heart, index) => {
        heart.style.animationDelay = `${index * 0.5}s`;
    });
}