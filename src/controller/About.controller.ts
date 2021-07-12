import CONFIG from "../config";

interface IAbout{
    title: string;
    text: string;
}

export default function About(conf: IAbout){
    
    let title: string = conf.title;
    let text: string = conf.text;
    
    function renderAbout(){
        $("#about-title").text(title)
        $("#about-txt").text(text)
    }

    return {
        renderAbout
    }
}