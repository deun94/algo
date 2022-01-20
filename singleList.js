class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        //linking chain to the next in line data
        //end of the list will turn out as null
    }
}


//arrays are like chain-links
//array versus list
// arrays are stored in the single place because it is recognized  as one chunk of data
class SLList{
    constructor(){
        this.head = null;
        //head pointer identifying the start of the list
        this.tail;
    }

    addToFront(num) {
        //if(!this.head)
        //creating new node with the value set to the passed in number
        var newNode = new Node(num);
        //take newNodes' next pointer and point it into the start of the list
        newNode.next = this.head;

        //what if the list is empty? 
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head = newNode;
        }
        //move our head pointer to point at our newNode
    }

    addToBack(num) {
        //create a newNode with the given number
        var newNode = new Node(num);
        //take tail.next and point it to newNode
        //.next because tail was already pointing to null
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // //take tail pointer and point it at the new node
        // this.tail = newNode;
    }

    removeFromFront(){
        //want to move the head pointer before removing
        if(this.head == null){
            console.log("Nothing to remove!")

            return this;
        }
        // else{
        //     var temp = this.head
        //     this.head = this.head.next
        //     temp = null
        //     // console.log(this.head)
        //     return this.head
        // }
        var temp = this.next;
        this.head = this.head.next
        temp.next = null;
        //if we simply move out head pointer over, that creates a new entry point to our list
        return this;
    }
    removeFromBack(){
        if(this.head == null || this.head.next ==null){
            console.log("List is too short! cannot remove from baack!")
            //return this to end function adn allow chining of methods like return self! completely optional
            return this
        }

        var runner = this.head

        while(runner.next != this.tail){
            runner = runner.next
        }

        runner.next = null

        return this

    }
    //move through a given list and determine if a given num is contained in it; return true/false(boolean)
    contains(num) {

        if(!this.head){ 
            console.log("There's nothing in this list ")
            return false
        }
        //in case the edge cases where the list is empty
        var runner = this.head;

        while(runner.next != null){
            if(runner.value == num){
                console.log(`here it is! ${runner.value}`)
                return true
            }
            runner = runner.next
        }
        return false


    }

    moveMinToFront() {
        //run through code
        //if the number is the min in the list remove from the spot
        //add to front
        if(!this.head){ 
            console.log("There's nothing in this list ")
        }
        //in case the edge cases where the list is empty

        //to find minimum
        var runner = this.head;
        var minNode = this.head.next;
        var beforeNode = this.head;
        var afterNode = this.head;

        while(runner.next != null){
            if(runner.next.value < minNode.value){
                minNode = runner.next;
                //checks min num
                beforeNode = runner;
                //saves the before list item and after item 
                afterNode = runner.next.next;
            }
            runner = runner.next
        }
        console.log(`here it is current minimum value ${minNode.value}`)
        minNode.next = this.head;
        //making the minNode to point to the head
        console.log(`here is our new head ${minNode.value}`)
        beforeNode.next = afterNode
        //moving head pointer to the minNode from the before head
        this.head = minNode
        //bm nd am 
    }

    moveMaxToBack(){

        if(!this.head){ 
            console.log("There's nothing in this list ")
        }

        var runner = this.head;
        var maxNode = this.head.next;
        var beforeNode = this.head;
        var afterNode = this.head;

        while(runner.next != null){
            if(runner.next.value > maxNode.value){
                maxNode = runner.next;
                //checks max number
                beforeNode = runner;
                //saves the before list item and after item 
                afterNode = runner.next.next;
            }
            runner = runner.next
        }
        console.log(`here it is current Maximum value ${maxNode.value}`)
            //moving tail point to our new tail
        maxNode.next = null
        //making the current tail point to our new node
        this.tail.next = maxNode
        this.tail = maxNode
        // this.tail.next = null
        //tail pointing out to the null again
        console.log(`here is our new tail ${maxNode.value}`)
        beforeNode.next = afterNode;

    }

    //run through this list and print all the values
    printValues() {
        //start at head pointer
        var runner = this.head;

        var str = "this.head =  "
        //run through entier List until you run into the null (end of the list)
        while(runner != null){
            //print value
            // console.log(`${runner.value} --> `);
            //`${}` is way to pass in value as a string in javasscript
            //ietrate your runner
            str +=  `${runner.value} --> `
            runner = runner.next;
        }
        str += " this.tail ------> null "
        console.log(str);

    }
}

var sll = new SLList();
sll.addToFront(9);
sll.addToFront(-3);
sll.addToFront(22);
sll.addToFront(16);
sll.addToFront(4);
sll.addToFront(53);
sll.addToBack(-5);
// sll.removeFromBack()
// // sll.contains(22);
// console.log(sll.contains(22))
sll.printValues();
sll.moveMinToFront();
sll.printValues();
sll.moveMaxToBack();
sll.printValues();