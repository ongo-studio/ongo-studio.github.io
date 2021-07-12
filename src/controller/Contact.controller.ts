import CONFIG from "../config"

interface IContact{
    title: string;
    filesText: string;
    btnText: string;
    namePlaceholder: string,
    emailPlaceholder: string,
    messagePlaceholder: string
}

export default function Contact(conf: IContact){

    let title: string = conf.title
    let filesText: string = conf.filesText
    let btnText: string = conf.btnText

    let namePlaceholder: string = conf.namePlaceholder;
    let emailPlaceholder: string = conf.emailPlaceholder
    let messagePlaceholder: string = conf.messagePlaceholder

    function renderContact(){
        $('#form-title').text(getTexts().title);
        $('#attachments-title').text(getTexts().filesText);
        $('#submit-btn').text(getTexts().btnText);

        $("#name").attr("placeholder", getTexts().namePlaceholder);
        $("#email").attr("placeholder", getTexts().emailPlaceholder);
        $("#message").attr("placeholder", getTexts().messagePlaceholder);
    }
    function getTexts(){
        
        return {
            title,
            filesText,
            btnText,

            namePlaceholder,
            emailPlaceholder,
            messagePlaceholder
        }
    }

    return { 
        renderContact
    }
}