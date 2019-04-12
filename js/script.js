
$(function () {
    bindEvent()
    setNewsList(0)
    setPartner()
    window.onresize = function () {
        setNewsList()
        setPartner()
    }
    var n=[]
    $(".unsee").each(function(){n.push($(this))})
    unseeArray(n)
    $(window).on("scroll",function(){
        unseeArray(n)
    })
})
function bindEvent() {
    $(".about-main-lf li").mouseenter(function () {
        if (!$(this).hasClass("active")) {
            $(".about-main-lf li").removeClass("active")
            $(this).addClass("active")
            var index = $(".about-main-lf li").index(this);
            $(".about-intro-list li,.about-intro-nav li").removeClass("active")
            $(".about-intro-list li:eq(" + index + "),.about-intro-nav li:eq(" + index + ")").addClass("active")
        }
    })
    $(".products-cate li").mouseenter(function () {
        if (!$(this).hasClass("active")) {
            $(".products-cate li").removeClass("active")
            $(this).addClass("active")
            var index = $(".products-cate li").index(this);
            $(".products-list-box .products-list-li").removeClass("active")
            $(".products-list-box .products-list-li:eq(" + index + ")").addClass("active")
        }
    })
}
function setNewsList() {
    var l = $(".news-list li").length;
    var n = $(".news-page li").index($(".news-page li.active"))
    moveNewsList(n)
    function moveNewsList(n) {
        if (window.innerWidth > 768) {
            var h = $(".news-pic").height() + $(".news-info").innerHeight() + parseInt($(".news-info").css("top"));
            $(".news-list").height(h)
            for (var i = 0; i < l; i = i + 2) {
                var left = ((i / 2) - n) * 100
                $(".news-list li:eq(" + i + ")").css({ "left": left + "%", "top": 0 })
                $(".news-list li:eq(" + (i + 1) + ")").css({ "left": (left + 51) + "%", "top": 0 })
            }
        } else {
            var h = $(".news-list li").outerHeight(true);
            $(".news-list").height(2 * h)
            for (var i = 0; i < l; i = i + 2) {
                var left = ((i / 2) - n) * 100
                $(".news-list li:eq(" + i + ")").css({ "left": left + "%", "top": 0 })
                $(".news-list li:eq(" + (i + 1) + ")").css({ "left": left + "%", "top": h + "px" })
            }
        }
        $(".news-list li").removeClass("active")
        $(".news-list li:eq(" + (2 * n) + "),.news-list li:eq(" + (2 * n + 1) + ")").addClass("active")
    }
    $(".news-page li").click(function () {
        if (!$(this).hasClass("active")) {
            $(".news-page li").removeClass("active")
            $(this).addClass("active")
            setNewsList($(".news-page li").index(this))
        }
    })
}

function setPartner() {
    var partner = 0;
    var maxlength = 5
    var liwidth = 20.25
    if (window.innerWidth <= 768) {
        maxlength = 3
        liwidth = 34
    }

    movePartner(0);
    function movePartner(n) {
        var l = $(".partners-ul li").length;
        for (var i = 0; i < l; i++) {
            $(".partners-ul li:eq(" + i + ")").css("left", ((i - n) * liwidth) + "%")
        }
    }
    $(".morebtn-prev").click(function () {
        if (partner > 0) partner--;
        else partner = $(".news-list li").length - maxlength
        movePartner(partner)
    })
    $(".morebtn-next").click(function () {
        if (partner < $(".news-list li").length - maxlength) partner++;
        else partner = 0
        movePartner(partner)
    })
}


//计算页面是否滚动到元素
function cal(o){var t=$(window).scrollTop(),n=$(window).scrollTop()+$(window).height();if(0<!o.length)return!1;var r=o.offset().top,e=o.offset().top+o.height();return r<t&&n<e||(t<r&&r<n||t<e&&e<n)}
//遍历判断滚动浮现特效
function unseeArray(e){for(var n=0;n<e.length;n++)cal(e[n])&&e[n].addClass("moveShow")}