const regexZIP = /^[0-9]{5,}$/;;

let activeNav = '';
let isActiveNavItem = '';

const testSpace = (input, errorSelector) => {
    let value = $(input);
    let error = $(errorSelector);

    if(value.val() === '') {
        error.html('Please enter ZIP Code !!');
        error.css({display: 'block'});
        value.css({
            color: '#dc3545',
            borderColor: '#dc3545',
            outlineColor: '#dc3545'
        })
        return false;
    } else {
        error.html('');
        error.css({display: 'none'});
        value.css({
            color: 'var(--p-blue-100)',
            borderColor: '#eee',
            outlineColor: 'var(--p-blue-200)'
        })
        return true;
    }
}

const testRegex = (regex, input, errorSelector) => {
    let value = $(input);
    console.log(value);
    let error = $(errorSelector);

    if(regex.test(value.val())) {
        error.html('');
        value.css({
            color: 'var(--p-blue-100)',
            borderColor: '#eee',
            outlineColor: 'var(--p-blue-200)'
        })
        error.css({display: 'none'});
        return value.val();
    } else {
        error.html('Please enter a valid ZIP Code !!');
        value.css({
            color: '#dc3545',
            borderColor: '#dc3545',
            outlineColor: '#dc3545'
        })
        error.css({display: 'block'});
        return false;
    }
}

const handlerSubmitLocation = () => {
    $('.nav-location__submit').click(function() {
        let flag = testRegex(regexZIP , '.nav-location__input', '.nav-location__error');
        console.log(flag)
        if(flag) {
            $('#location').click();
            $('#location-text').html(`${flag}`);
        }
    }) 
    $('.nav-location__cancel').click(function() {
        $('#location').click();
    })
}

const handlerClickNavBar = () => {
    let navBar = $('.nav__item');
    activeNav = '';
    navBar.click(function() {
        if( activeNav === '') {
            activeNav = $(this).attr('id');
            $(this).addClass('active');
        } else {
            if( activeNav === $(this).attr('id') ) {
                $(this).removeClass('active');
                activeNav = '';
            } else {
                $('.nav__item').removeClass('active');
                $(this).addClass('active');
                activeNav = $(this).attr('id');
            }
        }
    })
}

const handlerOnclickNavItem = (id, classContent) => {
    let btn = $('.nav__item');
    let content = $(classContent);
    let countNavItem = '';


    content.click(function(e) {
        e.stopPropagation();
    })


    btn.click(function () {
        if($(this).attr('id') === id) {
            if(countNavItem === '' || isActiveNavItem === 'click') {
                isActiveNavItem = '';
                content.addClass('opened');
                content.removeClass('animate__fadeOut');
                content.addClass('animate__animated animate__fadeIn');
                countNavItem = $(this).attr('id');
            } else {
                content.addClass('animate__animated animate__fadeOut');
                content.removeClass('animate__fadeIn');
                setTimeout(function() {
                    content.removeClass('opened');
                    countNavItem = '';
                }, 400)
            }
        } else {
            countNavItem = '';
            content.addClass('animate__animated animate__fadeOut');
            setTimeout(function() {
                content.removeClass('opened');
            }, 350)
        }
    })
}

const handlerOnClickBody = () => {
    let body = $('#body');
    body.click(function() {
        let itemNav = $('.nav-section.animate__animated.animate__fadeIn');
        if(itemNav) {
            itemNav.removeClass('animate__fadeIn');
            itemNav.addClass('animate__fadeOut');
            isActiveNavItem = 'click';
            activeNav = '';
        }
        $('.nav__item.active').removeClass('active');
    })
}

const move = (value) => {
    $('.vehicles__content').mCustomScrollbar("scrollTo", value, {
        scrollEasing: 'easeOut'
    })
}

$(document).ready(function() {
    //Heading
    let vehLink = document.querySelectorAll('.veh-nav__link');
    for(let item of vehLink) {
       item.onclick = () => {
           document.querySelector('.veh-nav__link.line').classList.remove('line');
           item.classList.add('line');
       }
    }

    //Nav bar
    handlerClickNavBar();
    handlerOnclickNavItem('vehicles', '.vehicles');
    handlerOnclickNavItem('shopping-tools', '.shopping-tool');
    handlerOnclickNavItem('location', '.location');
    handlerOnclickNavItem('owners', '.owners');
    //Validation location
    handlerSubmitLocation();
 
    handlerOnclickNavItem('discover', '.discover');
    handlerOnclickNavItem('search', '.search');
    handlerOnClickBody();
    // Move
    // $('.vehicles__content').mCustomScrollbar({
    //     theme: 'dark'
    // })
    let subLinks = $('.veh-nav__link');
    subLinks.click(function() {
        let id = this.getAttribute('data-id');
        move(`#${id}`);
    })

})
