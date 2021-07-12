import LanguageTranslator from "ibm-watson/language-translator/v3"
import { IamAuthenticator } from "ibm-cloud-sdk-core";

const apikey = process.env.API_KEY;
const apiUrl = process.env.API_URL;

const languageTranslator = new LanguageTranslator({
    authenticator: new IamAuthenticator({
        apikey: apikey
    }),
    serviceUrl: apiUrl
})

export default function Translation(from: string, to: string, texts: string[]){
    languageTranslator.translate({
        text: [...texts],
        source: from,
        target: to,
    }).then(e=>{
        if(e.statusText === "available") console.log('avaliable')
        console.log(e.result)
    })
    function getUrl():string{
        return `
            
        `
    }
}