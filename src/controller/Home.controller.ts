import CONFIG from "../config";

const logo = require('../public/assets/ongo-yellow.svg');

export default function Home(){
    let greetingArr = CONFIG.homeContent.greetings.split(" ");
    let fp = greetingArr.shift();
    let lp = greetingArr.pop();

    const renderHome = ():void => {
        $('#home').append(getHome())
    }
    const getHome = ():string => {
        return `
            <section class="home-section">
                <img src="${logo}" class="home-logo">
            </section>
            <section class="home-section">
                <p class="code">
                    ${fp}
                </p>
                <h2>
                    ${greetingArr.join()} <b>${lp}</b>
                </h2>
                <div class="home-text">
                    ${CONFIG.homeContent.text}
                </div>
                <div>
                    <div class="hexagon"></div>
                    <div class="hexagon"></div>
                    <div class="hexagon"></div>
                    <div class="hexagon"></div>
                    <div class="hexagon"></div>
                </div>
            </section>
        `
    }
    return {
        renderHome
    }
}