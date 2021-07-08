import CONFIG from "../config"

let console = require('../public/assets/console.svg')
let phone = require('../public/assets/phone.svg')
let pen = require('../public/assets/pen.svg')

let imgs = [
    console,
    phone,
    pen
]

export default function About(){

    function renderAbout(){
        $('#about').append(getAbout())
    }
    function getCard(img:string, title:string, text:string){
        return `
            <section class="about-section">
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
    function getAbout():string{
        let about:string = '';
        CONFIG.aboutContent.cards.map((e,i)=>{
            about += getCard(imgs[i], e.title, e.text)
        })
        return about
    }

    return {
        renderAbout
    }
}