$(document).ready(function () {
    $("#sujungGu").on("click", function () {
        var $clickedImg = $(this);
        $("#container img").removeClass('hovo');
        // 함수 실행 방법 : 함수명(매개변수);
        right_sujung(1000);
        $("#container img").not($clickedImg).animate({
            width: '0%',
            height: '0%',
            opacity: 0
        }, 1000);
        $clickedImg.parent().animate({
            'left': '10px'
        }, 1000);
        $clickedImg.animate({
            width: "190%",
            height: "190%",
        }, 1000);
    });
    $("#jungwonGu").on("click", function () {
        var $clickedImg = $(this);
        $("#container img").removeClass('hovo');
        right_jungwon(1000);
        $("#container img").not($clickedImg).animate({
            width: '0%',
            height: '0%',
            opacity: 0
        }, 1000);
        $clickedImg.parent().animate({
            'left': '50px'
        }, 1000);
        $clickedImg.animate({
            width: "250%",
            height: "250%",
        }, 1000);
    });
    $("#bundangGu").on("click", function () {
        var $clickedImg = $(this);
        $("#container img").removeClass('hovo');
        right_bundang(1000);
        $("#container img").not($clickedImg).animate({
            width: '0%',
            height: '0%',
            opacity: 0
        }, 1000);
        $clickedImg.parent().animate({
            'top': '40px',
            'left': '20px'
        }, 1000);
        $clickedImg.animate({
            width: "180%",
            height: "180%",
        }, 1000);
    });
    $('#shiheung').on('click', function () {
        if ($(this).is(':checked')) {
            $('#pin_shiheung').show().addClass('rotate-jump');
        } else {
            $('#pin_shiheung').removeClass('rotate-jump').hide();
        }
    });
    $('#godeung').on('click', function () {
        if ($(this).is(':checked')) {
            $('#pin_godeung').show().addClass('rotate-jump');
        } else {
            $('#pin_godeung').removeClass('rotate-jump').hide();
        }
    });
    $('#shinchon').on('click', function () {
        if ($(this).is(':checked')) {
            $('#pin_shinchon').show().addClass('rotate-jump');
        } else {
            $('#pin_shinchon').removeClass('rotate-jump').hide();
        }
    });
    $('#bokjung').on('click', function () {
        if ($(this).is(':checked')) {
            $('#pin_bokjung').show().addClass('rotate-jump');
        } else {
            $('#pin_bokjung').removeClass('rotate-jump').hide();
        }
    });
    $('#sujin').on('click', function () {
        if ($(this).is(':checked')) {
            $('#pin_sujin').show().addClass('rotate-jump');
        } else {
            $('#pin_sujin').removeClass('rotate-jump').hide();
        }
    });
    $('#taepyung').on('click', function () {
        if ($(this).is(':checked')) {
            $('#pin_taepyung').show().addClass('rotate-jump');
        } else {
            $('#pin_taepyung').removeClass('rotate-jump').hide();
        }
    });
    $('#shinheung').on('click', function () {
        if ($(this).is(':checked')) {
            $('#pin_shinheung').show().addClass('rotate-jump');
        } else {
            $('#pin_shinheung').removeClass('rotate-jump').hide();
        }
    });
    $('#sansung').on('click', function () {
        if ($(this).is(':checked')) {
            $('#pin_sansung').show().addClass('rotate-jump');
        } else {
            $('#pin_sansung').removeClass('rotate-jump').hide();
        }
    });
    $('#dandae').on('click', function () {
        if ($(this).is(':checked')) {
            $('#pin_dandae').show().addClass('rotate-jump');
        } else {
            $('#pin_dandae').removeClass('rotate-jump').hide();
        }
    });
    $('#yangzi').on('click', function () {
        if ($(this).is(':checked')) {
            $('#pin_yangzi').show().addClass('rotate-jump');
        } else {
            $('#pin_yangzi').removeClass('rotate-jump').hide();
        }
    });
});

function rewind() {
    $("#container img").animate({
        width: '100%',
        height: '100%',
        opacity: '1'
    }, 1000);
    $("#sujungGu").parent().animate({
        'left': '100px'
    }, 1000);
    $("#jungwonGu").parent().animate({
        'left': '240px'
    }, 1000);
    $("#bundangGu").parent().animate({
        'top': '158px',
        'left': '97px'
    }, 1000);
    // Use promise() method to wait for all animations to finish
    // promise() 메소드와 done(function()) 메소드를 함께 사용할 경우 이 함수가 모두 끝나기까지 기다린 후 다음을 실행한다.
    $("#container img").promise().done(function () {
        $("#container img").addClass('hovo');
    });
    right_close(1000);
    $("input:checkbox").prop("checked", false);
    $('#pin img').hide();
}

function right_sujung(time) {$("#sujung2").slideDown(time);}
function right_jungwon(time) {$("#jungwon2").slideDown(time);}
function right_bundang(time) {$("#bundang2").slideDown(time);}
function right_close(time) {$(".right").slideUp(time);}
