
// window.addEventListener('scroll', function() {
//     var navbar = document.getElementById('navbar');
//     var navbarBottom = navbar.getBoundingClientRect().bottom;
//     var header = document.querySelector('header');
//     var headerBottom = header.getBoundingClientRect().bottom;

//     // 如果 navbar 的底部离开 header 元素的底部，则添加 'scrolled' 类，否则删除 'scrolled' 类
//     if (navbarBottom > headerBottom) {
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
// });

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var navbarBottom = navbar.getBoundingClientRect().bottom;
    var header = document.querySelector('header');
    var headerBottom = header.getBoundingClientRect().bottom;

    // 如果窗口滚动的位置超过 header 的底部，则添加 'scrolled' 类并移除 'initial' 类，否则添加 'initial' 类并移除 'scrolled' 类
    if (navbarBottom > headerBottom) {
        navbar.classList.add('scrolled');
        navbar.classList.remove('initial');
    } else {
        navbar.classList.add('initial');
        navbar.classList.remove('scrolled');
    }
});

// 页面加载时检查滚动位置
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var navbarBottom = navbar.getBoundingClientRect().bottom;
    var header = document.querySelector('header');
    var headerBottom = header.getBoundingClientRect().bottom;

    if (navbarBottom > headerBottom) {
        navbar.classList.add('scrolled');
        navbar.classList.remove('initial');
    } else {
        navbar.classList.add('initial');
        navbar.classList.remove('scrolled');
    }
});
// $(document).ready(function(){
//     $('a[href^="#"]').on('click', function(e) {
//         e.preventDefault();

//         var target = this.hash;
//         var $target = $(target);

//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top
//         }, 200, 'swing'); // 1000 为滚动持续时间，'swing' 为渐入渐出动画
//     });
// });