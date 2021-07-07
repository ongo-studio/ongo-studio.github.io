import Observer from "../Observer";
import Subject from "../Subject";

export interface IMenuItem{
    href: string;
    text: string;
    isActive?: boolean;
}

export default class MenuItem extends Subject implements IMenuItem, Observer{
    href: string;
    text: string;
    isActive: boolean;

    constructor(item: IMenuItem){
        super();
        this.href = item.href;
        this.text = item.text;
        this.isActive = item.isActive;
    }
    getItem(){
        return `<a class="${this.isActive?'active':''} onclick="${this.handleClick}" nav-link" href="#${this.href}">${this.text}</a>`
    }
    handleClick(){
        this.isActive = !this.isActive;
        this.notifyObservers();
    }
    
    notify(){
        this.handleClick();
    }
}