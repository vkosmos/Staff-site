$(document).ready(function(){

    //Стилизация выпадающих списков
    $('.form__select--position-cv').styler();
    $('.form__select--position-request').styler();
    $('.form__select--schedule-request').styler();
    $('.recruitment__select--position').styler();

    var popupStaff = $(".modal-staff__list");
    var buttonStaff = $(".modal__opener--staff");
    var popupRequest = $(".modal-request");
    var buttonRequest = $(".modal__opener--request");
    var popupCv = $(".modal-cv");
    var buttonCv = $(".modal__opener--cv");

    //Добавление имени загружаемого файла в input
    $(".form__file-input").on('change', showFileName);

    //Раскрытие пункта верхнего мееню
    buttonStaff.on('click', function(evt) {
        evt.preventDefault();
        evt.stopPropagation();

        popupStaff.toggleClass('modal__toggle')
        buttonStaff.toggleClass('main-nav__link--active');

        if (buttonCv.hasClass('main-header__button--active')){
            buttonCv.removeClass('main-header__button--active');
        }
        if (buttonRequest.hasClass('main-header__button--active')){
            buttonRequest.removeClass('main-header__button--active');
        }
        if (popupCv.hasClass('modal__toggle')){
            popupCv.removeClass('modal__toggle');
        }
        if (popupRequest.hasClass('modal__toggle')){
            popupRequest.removeClass('modal__toggle');
        }
    });

    //Раскрытие модалки Отправить заявку
    buttonRequest.on('click', function(evt) {
        evt.preventDefault();
        evt.stopPropagation();

        popupRequest.toggleClass('modal__toggle');
        if (popupCv.hasClass('modal__toggle')) {
            popupCv.removeClass('modal__toggle');
            buttonCv.toggleClass("main-header__button--active");
        }
        buttonRequest.toggleClass("main-header__button--active");

        if (buttonStaff.hasClass('main-nav__link--active')){
            buttonStaff.removeClass('main-nav__link--active');
        }
        if (popupStaff.hasClass('modal__toggle')){
            popupStaff.removeClass('modal__toggle');
        }
    });

    //Раскрытие модалки Резюме
    buttonCv.on('click', function(evt) {
        evt.preventDefault();
        evt.stopPropagation();

        popupCv.toggleClass('modal__toggle');
        if (popupRequest.hasClass('modal__toggle')) {
            popupRequest.removeClass('modal__toggle');
            buttonRequest.toggleClass("main-header__button--active");
        }
        buttonCv.toggleClass("main-header__button--active");

        if (buttonStaff.hasClass('main-nav__link--active')){
            buttonStaff.removeClass('main-nav__link--active');
        }
        if (popupStaff.hasClass('modal__toggle')){
            popupStaff.removeClass('modal__toggle');
        }
    });

    $('.modal-request').on('click', function(evt){
        evt.stopPropagation();
    });

    $('.modal-cv').on('click', function(evt){
        evt.stopPropagation();
    });

    //Закрываем все открытые модалки
    $('body').on('click', closeModals);

    // Смена слайда по нажатию кнопки
    $('.gallery__button').click(sliderNextImage);

    //Смена слайда по времени
    setInterval(sliderIntervalNextImage, 7000);
});

function closeModals() {
    var popupStaff = $(".modal-staff__list");
    var buttonStaff = $(".modal__opener--staff");
    var popupRequest = $(".modal-request");
    var buttonRequest = $(".modal__opener--request");
    var popupCv = $(".modal-cv");
    var buttonCv = $(".modal__opener--cv");

    if (buttonStaff.hasClass('main-nav__link--active')) {
        buttonStaff.removeClass('main-nav__link--active');
    }
    if (buttonCv.hasClass('main-header__button--active')) {
        buttonCv.removeClass('main-header__button--active');
    }
    if (buttonRequest.hasClass('main-header__button--active')) {
        buttonRequest.removeClass('main-header__button--active');
    }
    if (popupStaff.hasClass('modal__toggle')) {
        popupStaff.removeClass('modal__toggle');
    }
    if (popupCv.hasClass('modal__toggle')) {
        popupCv.removeClass('modal__toggle');
    }
    if (popupRequest.hasClass('modal__toggle')) {
        popupRequest.removeClass('modal__toggle');
    }
}

function sliderNextImage() {
    var newIndex = $('.gallery__button').index(this);
    var currentImage = $('.gallery__item--active');

    currentImage.removeClass('gallery__item--active');
    $('.gallery__item').eq(newIndex).addClass('gallery__item--active');

    $('.gallery__button--active').removeClass('gallery__button--active');
    $(this).addClass('gallery__button--active');
}

function sliderIntervalNextImage(){
    var currentIndex = $('.gallery__item--active').index();
    var nextIndex = currentIndex + 1;

    var currentImage = $('.gallery__item--active');
    var nextImage = $('.gallery__item').eq(nextIndex);

    var currentButton = $('.gallery__button--active');
    var nextButton = $('.gallery__button').eq(nextIndex);

    currentImage.removeClass('gallery__item--active');
    currentButton.removeClass('gallery__button--active');

    if (nextIndex == ( $('.gallery__item:last').index() + 1 )){
        $('.gallery__item').eq(0).addClass('gallery__item--active');
        $('.gallery__button').eq(0).addClass('gallery__button--active');
    }else{
        nextImage.addClass('gallery__item--active');
        nextButton.addClass('gallery__button--active');
    }
}

function showFileName(){
    var file = $('.form__file-input').val();
    file = file.replace(/\\/g, "/").split("/").pop();
    $('#file-name') .text(file);
}
