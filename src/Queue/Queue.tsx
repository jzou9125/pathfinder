export default class Queue{
    items: Array<number[]>;

    constructor(){
        this.items = [];
    }

    enqueue(item:number[]){
        this.items.push(item);
    }

    dequeue(){
        return this.items.shift();
    }

    peek(){
        return this.items[0];
    }

    getSize(){
        return this.items.length;
    }
}