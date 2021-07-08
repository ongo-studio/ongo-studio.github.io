import CONFIG from "../config"

export default function Contact(){
    function renderContact(){
        $('#contact form').append(getContact())
    }
    function getContact(){
        return `
            <label>${CONFIG.contactContent.title}</label>
            <input required type="text" name="name" id="name" placeholder="${CONFIG.contactContent.namePlaceholder}">
            <input required type="email" name="email" id="email" placeholder="${CONFIG.contactContent.emailPlaceholder}">
            <textarea required name="message" id="message" placeholder="${CONFIG.contactContent.messagePlaceholder}"></textarea>
            <div>
                <label for="attatchments">
                    ${CONFIG.contactContent.filesText}
                </label>
                <input type="file" name="attatchments" multiple id="attatchments">
                <button> 
                    <div></div>
                    <div>
                        ${CONFIG.contactContent.btnText}
                    </div>
                </button>
            </div>
        `
    }
    return {
        renderContact
    }
}