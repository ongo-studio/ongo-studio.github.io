import IMail from "../models/Mail";

export default class MailController implements IMail{
    from: string;
    message: string;
    attachments: FileList;
    private constructor(from:string, message: string, attachments: FileList){
        this.from = from;
        this.message = message;
        this.attachments = attachments;
    }

    public static sendMail(from:string, message: string, attachments: FileList){
        let controller:MailController = new this(from, message, attachments);
        controller.send(controller);
    }

    private send(mail: IMail){
        console.log("enviando email para: " + mail.from);
        console.log("------------------------------------");
        console.log(mail.message);
    }
}