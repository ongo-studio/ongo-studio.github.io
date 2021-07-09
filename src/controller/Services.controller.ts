import CONFIG from "../config"

let console = require('../public/assets/console.svg')
let phone = require('../public/assets/phone.svg')
let pen = require('../public/assets/pen.svg')

let imgs = [
    console,
    phone,
    pen
]

export default function Services(){

    function renderAbout(){
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
        let services:string = '';
        CONFIG.servicesContent.cards.map((e,i)=>{
            services += getCard(imgs[i], e.title, e.text)
        })
        return services
    }

    return {
        renderAbout
    }
}