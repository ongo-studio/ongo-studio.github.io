import MenuItem, { IMenuItem } from "./MenuItem";
import Observer from "../Observer";
import Subject from "../Subject";

export class Menu extends Subject implements Observer{

    private items: MenuItem[] = [];
    collection: Observer[];

    constructor(items: IMenuItem[]){
        super()
        items.map((e, i)=> {
            let item = new MenuItem(e);
            item.subscribe(this);
            this.items.push(item);
            this.subscribe(item);
        })
        this.notify()
    }

    private getMenu(): string{
        let menu:string = '';
        this.items.map(e=>{
            if(!e) return 
            menu += e.getItem();
        })
        return menu;
    }

    renderMenu(){
        document.getElementsByTagName('nav')[0].innerHTML = this.getMenu();
    }

    notify(){
        this.renderMenu();
    }
}