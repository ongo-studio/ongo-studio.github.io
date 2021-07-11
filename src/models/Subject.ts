import Observer from "./Observer";

class Subject{
    collection: Observer[] = [];
    subscribe(o:Observer){
        this.collection.push(o);
    }
    unsubscribe(o:Observer){
        this.collection.splice(this.collection.indexOf(o), 1);
    }
    notifyObservers(){
        this.collection.map(e=>{
            e.notify();
        })
    }
}

export default Subject;