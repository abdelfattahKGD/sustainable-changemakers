// لجعل الأزرار تظهر فقط عند مرور الماوس
document.querySelectorAll('.half').forEach(half => {
    half.addEventListener('mouseover', function() {
        const button = this.querySelector('.button');
        const image = this.querySelector('.image');
        image.style.filter = 'grayscale(0%)';
        button.style.opacity = '1';
        button.style.visibility = 'visible';
    });

    half.addEventListener('mouseout', function() {
        const button = this.querySelector('.button');
        const image = this.querySelector('.image');
        image.style.filter = 'grayscale(100%)';
        button.style.opacity = '0';
        button.style.visibility = 'hidden';
    });
});


