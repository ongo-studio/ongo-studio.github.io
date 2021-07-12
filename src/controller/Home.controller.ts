import CONFIG from "../config";

interface IHome{
    greeting: string;
}

export default function Home(conf: IHome){
    let greeting: string = conf.greeting;
    let greetingArr: string[] = greeting.split(" ");
    //first part of the string
    let fp:string = greetingArr.shift()

    function renderHome ():void{
        $('#home-greeting').text(getHomeGreeting())
        $('#home-txt').html(getHomeTxt())
    }
    function getHomeGreeting():string {
        return fp;
    }
    function getHomeTxt():string {
        let greeting = greetingArr.join(" ");
        return `<h2>${greeting} <b>öngö</b></h2>`
    }

    return {
        renderHome
    }
}