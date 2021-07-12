interface IMenuItem{
    name: string;
    link: string;
}

export default function Menu(items: IMenuItem[]){
    let menu: string = '';

    function getMenuItem(item: IMenuItem, active:boolean = false){
        return `<a class="${active?'active':''} nav-link" href="#${item.link}">${item.name}</a>`
    }
    function getMenu ():string{
        items.forEach((e,i)=>{
        if(i === 0) menu += getMenuItem(e, true);
            else menu += getMenuItem(e)
        })
        return menu
    }

    function handleScroll (){
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
    function handleMenuItemClick (){
        $('.nav-link').each((i,e)=>{
            e.onclick = ()=>{
                toggleActive(e);
            }
          })
    }
    function toggleActive (e: HTMLElement|JQuery<HTMLElement>){
        $(".active").toggleClass('active');
        $(e).toggleClass("active");
    }
    function renderMenu(){
        $('nav').append(getMenu());
    }

    return {
        handleMenuItemClick,
        handleScroll,
        renderMenu
    }
}