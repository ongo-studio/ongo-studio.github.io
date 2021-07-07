function toggleActive(e: HTMLElement|JQuery<HTMLElement>){
    $(".active").toggleClass('active');
    $(e).toggleClass("active");
}

export function handleScroll(){
    $(window).on('scroll', ()=>{
        $('.nav-link').each(function(i:number,e:HTMLElement):void{
            let currEl = e.getAttribute('href');
            if ( $(currEl).offset().top <= $('main').scrollTop()) {
                // if(currLink === "#contact" && ($("main").scrollTop() < 1650)){
                //     currLink = "#portfolio";
                // }
                toggleActive(e);
            }
      })
    })
    $('.nav-link').each((i,e)=>{
      e.onclick = ()=>{
          toggleActive(e);
      }
    })
}
