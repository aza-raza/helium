new WOW().init();
$('.timer').countTo();

//--------------------------------------------------------------
//back-to-top
const backToTop = document.querySelector('.back-to-top');
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
});

//--------------------------------------------------------------
//navbar
let navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function(){
    window.pageYOffset > navbar.clientHeight ? navbar.classList.add("scroll-down") : navbar.classList.remove("scroll-down");
});

//--------------------------------------------------------------
//filter
let btns = document.querySelectorAll('.portfolio .btn');
console.log(btns)

btns.forEach(btn =>{
    btn.addEventListener('click', function(){
        let btnSelected = btn.getAttribute('data-filter');
        console.log(btnSelected)
        let imgToHide = document.querySelectorAll(`.filter .portfolio-item:not([data-filter = '${btnSelected}'])`);
        console.log(imgToHide)
        //let imgToHide = document.querySelectorAll(`.filtrage .img-container:not([data-filter='${boutonSelected}'])`);
        //let imgToHide = document.querySelectorAll(`.filtrage .img-container:not([data-filter='${boutonSelected}'])`);
        let imgToShow = document.querySelectorAll(`.filter [data-filter = '${btnSelected}']`);

        if (btnSelected == 'all') {
            imgToHide = [];
            imgToShow = document.querySelectorAll('.filter [data-filter]');
        }
        imgToHide.forEach(el => {
            el.classList.add('hide');
            el.classList.remove('show');
        });
        imgToShow.forEach(el => {
            el.classList.remove('hide');
            el.classList.add('show'); 
        });

    });
});

//--------------------------------------------------------------
//scrollspy
// $(document).ready(function(){
//     //Activate bootstrap scrollspy
//       $('body').scrollspy({ 
//           target: '#navbar-example',
//           offset: 0
//       });

//       //Menu scroll to section
//       $('.scrollto').click(function(event) {
//        var $anchor = $(this);
//         $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top - 40  }, 1500);
//          event.preventDefault();
//      });

// }); 


// var scrollSpy = new bootstrap.ScrollSpy(document.body, {
//     target: '#navbar-example'
//   })