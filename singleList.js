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

    // contains(num) {

    // }

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
sll.printValues();