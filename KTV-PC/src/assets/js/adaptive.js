window.addEventListener('load', function () {
    getWChange();

    window.onresize = getWChange;
    // pc适配
    function getWChange() {
        //获取html标签
        var htmlDom = document.documentElement;
        //获取当前屏幕的宽度
        var winW = window.innerWidth;
        // var winW = document.documentElement;

        if (winW > 1920) {
            winW = 1920;
        } else if (winW < 1100) {
            winW = 1100;
        }

        var offWidth = winW / 1920 * 100;//屏幕的宽度 / 设计稿的宽度得到的是html的字体大小 乘100是为了解决0.5px问题
        document.body.opacity = 1;
        htmlDom.style.fontSize = offWidth + 'px';
    }
})