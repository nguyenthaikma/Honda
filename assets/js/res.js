const handlerOnclickMenu = () => {
    let isClick = false;
    let btn = $('.nav__icon-collapse');
    let content = $('#navbarNav');
    let ulElement = $('.nav__list-right');
    btn.click(() => {
        isClick = !isClick;
        if (isClick) {
            content.addClass('opened');
            ulElement.addClass('animate__animated animate__fadeInLeft');
            ulElement.removeClass('animate__fadeOutRight');
        } else {
            ulElement.addClass('animate__fadeOutRight');
            ulElement.removeClass('animate__fadeInLeft');
            setTimeout(function () {
                content.removeClass('opened');
            }, 300)
        }
    })
}

$(document).ready(function () {
    handlerOnclickMenu();
})