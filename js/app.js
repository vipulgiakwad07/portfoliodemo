$(document).ready(function(){
    $('.slider').slick({
     arrows:false, //for removing slider button
     dots:true,  //
     appendDots:'.slider-dots', //for adding new dots manually add class in html file and giving link here
     dotsClass:'dots',
    
    });

     let hamberger =document.querySelector('.hamberger');
     let times = document.querySelector('.times');
     let mobileNav = document.querySelector('.mobile-nav');

     hamberger.addEventListener('click',function(){
         mobileNav.classList.add('open');     
        
        });

     times.addEventListener('click',function(){
         mobileNav.classList.remove('open');

     });

})

