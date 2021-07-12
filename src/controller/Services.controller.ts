let console = require('../public/assets/images/console.svg')
let phone = require('../public/assets/images/phone.svg')
let pen = require('../public/assets/images/pen.svg')

let imgs = [
    console,
    phone,
    pen
]

interface IServicesCard{
    title: string;
    text: string;
}

interface IServices{
    title: string;
    cards: IServicesCard[]
}


export default function Services(conf: IServices){

    let title: string = conf.title;
    let cards: IServicesCard[] = conf.cards;

    function renderServices():void{
        $('#services').append(getServices())
    }
    function getCard(img:string, title:string, text:string):string{
        return `
            <section class="services-section">
                <img src="${img}">
                <div>
                    <h2>${title}</h2>
                    <p class="code">
                        ${text}
                    </p>
                </div>
            </section>
        `
    }
    function getServices():string{
        let services:string = `<h2 class="title">${title}</h2><div>`;
        cards.map((e:IServicesCard,i:number)=>{
            services += getCard(imgs[i], e.title, e.text)
        })
        services += '</div>'
        return services
    }

    return {
        renderServices
    }
}