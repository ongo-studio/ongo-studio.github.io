import CONFIG from "../config"

let console = require('../public/assets/images/console.svg')
let phone = require('../public/assets/images/phone.svg')
let pen = require('../public/assets/images/pen.svg')

let imgs = [
    console,
    phone,
    pen
]

export default function Services(){

    function renderServices(){
        $('#services').append(getServices())
    }
    function getCard(img:string, title:string, text:string){
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
        let services:string = '<h2 class="title">What we do</h2><div>';
        CONFIG.servicesContent.cards.map((e,i)=>{
            services += getCard(imgs[i], e.title, e.text)
        })
        services += '</div>'
        return services
    }

    return {
        renderServices
    }
}