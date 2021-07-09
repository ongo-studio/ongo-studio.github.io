import CONFIG from '../config';

export default function Menu(){
    let menu: string = '';
    let items:string[] = CONFIG.menuItems;

    const getMenuItem = (item: string, active:boolean = false)=>{
        return `<a class="${active?'active':''} nav-link" href="#${item}">${item}</a>`
    }

    items.forEach((e,i)=>{
        if(i === 0) menu += getMenuItem(e, true);
        else menu += getMenuItem(e)
    })
    const getMenu = ():string =>{
        return menu
    }

    const handleScroll = () => {
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
    const handleMenuItemClick = () => {
        $('.nav-link').each((i,e)=>{
            e.onclick = ()=>{
                toggleActive(e);
            }
          })
    }
    const toggleActive = (e: HTMLElement|JQuery<HTMLElement>) => {
        $(".active").toggleClass('active');
        $(e).toggleClass("active");
    }
    function renderMenu(){
        $('nav').append(getMenu());
    }
    return {
        handleMenuItemClick,
        toggleActive,
        handleScroll,
        renderMenu
    }
}