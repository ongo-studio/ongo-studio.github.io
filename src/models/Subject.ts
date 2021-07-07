import Observer from "./Observer";

interface ISubject{
    collection: Observer[];
    subscribe: (o: Observer)=>void;
    unsubscribe: (o: Observer)=>void;
    notifyObservers: ()=>void;
}

class Subject implements ISubject{
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