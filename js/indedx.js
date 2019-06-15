$(function () {
    $("header").load("template/header.html")
    $("footer").load("template/footer.html")
    setSlide("#newspanel-slide", "#newspanel-slide .news-pic-slide-list", "#newspanel-slide .news-list-nav")
})

function setSlide(id, list, nav) {
    $(nav + " li").click(function () {
        var index = $(nav + " li").index(this)
        $(nav + " li").removeClass("active")
        $(this).addClass("active")
        $(list).css("transform", "translateX(" + (-33.33 * index) + "%)")
    })
}