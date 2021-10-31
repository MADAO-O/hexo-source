// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/medias/funny.ico");
        document.title = '╰(°A°`)╯页面不见了';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/medias/icon.png");
        document.title = '╭(′▽`)╮又回来了~';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});