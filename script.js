$(document).ready(() => {
    $(window).scroll(() => {
        if(this.scrollY> 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.navbar').addClass("show");
        }
        else{
            $('.navbar').removeClass("show");
        }
    });

    //slide-up script
    $('.scroll-up-btn').click( ()=>{
        $('html').animate({scrollTop: 0})
    })

    // toggle menu/navbar scripts
    $('.menu-btn').click(() => {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
     });
})

//typing animation script
var typed = new Typed(".typing", {
    strings: ["Programmer", "Student", "Blogger"],
    typedSpeed: 100,
    backSpeed: 60,
    loop: true
});


var typed = new Typed(".typing-2", {
    strings: ["Programmer", "Student", "Blogger"],
    typedSpeed: 100,
    backSpeed: 60,
    loop: true
});







