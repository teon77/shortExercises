class Cat{
    constructor(){
        this.tiredness = 5;
        this.hunger = 5;
        this.lonliness = 5;
        this.happiness = 5;
    }
    eat(){
        if(this.hunger <= 1) return;
        this.hunger -= 1;
    }

    sleep(){
        if(this.tiredness <= 1) return;
        this.tiredness -= 1;
    }

    pet(){
        if(happiness >= 10) return;
        if(this.happiness > 8) console.log("I dont want to be pet");
        this.happiness += 1;
    }
    show(){
        console.log(this.happiness);
        console.log(this.hunger);
        console.log(this.lonliness);
        console.log(this.tiredness);
    }
}
// Cat.prototype.pet = () => { console.log("woho");}

/* Reading List */
class BookList{
    constructor(){
        this.numReadenBooks=0
        this.numUnreadenBooks=0
        this.nextBook=undefined;
        this.currentBook=undefined;
        this.lastBook=undefined;
        this.existBooks = []
    }
    add(book){
        this.existBooks.push(book);
        this.numUnreadenBooks++;
        if(!this.currentBook){
            this.currentBook=book;
        }else if(!this.nextBook){
            this.nextBook=book;
        }
    }
    finishCurrentBook(){
        if(this.currentBook){
            this.numReadenBooks++;
            this.numUnreadenBooks--;
            this.currentBook.isReaden = "true";
            //this for make date => dd mm yyyy
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0');
            var yyyy = today.getFullYear();
            today = dd + '/' + mm + '/' + yyyy;
            this.currentBook.date = today;
            //
            
            if(this.numUnreadenBooks>0){
                this.lastBook = this.currentBook;
                this.currentBook = this.nextBook;
                let next = undefined;
                for(let i = 0; i < this.existBooks.length; i++){
                    if(this.existBooks[i] !== this.currentBook && next === undefined){
                        if(this.existBooks[i].isReaden === "false"){
                          next=this.existBooks[i];
                        }
                    }
                }
                this.nextBook=next;
            }else{
                this.currentBook = undefined;
                this.nextBook =undefined;
            }
        }
    }
    printList(){
        for (let i = 0 ; i < this.existBooks.length ; i++){
            console.log(this.existBooks[i])
        }
    }
}
class Book{
    constructor(_title,_genre,_author){
        this.title = _title;
        this.genre =_genre
        this.author= _author
        this.isReaden ="false"
        this.date = undefined;
    }
}
let book1 = new Book("Harry Potter 1" , "fiction" , "J.K. Roling"); 
let book2 = new Book("Harry Potter 2" , "fiction" , "J.K. Roling"); 
let book3 = new Book("Harry Potter 3" , "fiction" , "J.K. Roling"); 
let libary = new BookList();
libary.add(book1);
libary.add(book2);
libary.add(book3);
libary.printList();
console.log(libary);
libary.finishCurrentBook();
libary.printList();
console.log(libary);
libary.finishCurrentBook();
libary.printList();
console.log(libary);