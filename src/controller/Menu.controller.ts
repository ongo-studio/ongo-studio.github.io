function toggleActive(e: HTMLElement|JQuery<HTMLElement>){
    $(".active").toggleClass('active');
    $(e).toggleClass("active");
}

export function handleScroll(){
    $(window).on('scroll', ()=>{
        $('#menu a').each(function(i:number,e:HTMLElement):void{
            let currEl = e.getAttribute('href');
            let navHeight = $('#menu').outerHeight();
            let halfHeight = $(currEl).outerHeight()/2;
            
            if ( $(currEl).position().top <= ($(window).scrollTop() + navHeight) + halfHeight) {
                    toggleActive(e);
                }
      })
    })
}

export function handleMenuItemClick(){
    $('.nav-link').each((i,e)=>{
        e.onclick = ()=>{
            toggleActive(e);
        }
      })
}
