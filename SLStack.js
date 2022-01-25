class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a stack operates on the principal of "First In Last Out" like a pringles can
class SLStack{
    constructor(){
        this.top = null
        // this.bottom = null
    }
//add a given value to your stack
    push(value){
        var newNode = new Node(value);

        // if (!this.top){
        //     this.top = newNode;
        //     this.bottom = newNode;
        //}
        // redudant
        // var temp = this.top;
        // this.top = newNode;
        // this.top.next = temp;
        // temp = this.bottom;
        // this.bottom.next = null;
        newNode.next = this.top;
        this.top = newNode;

        return this;
    }
//remove and return the top value
    pop(){
        if(!this.top) {
            console.log("Nothing in this queue!");
            return null;
        }
        var temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        return temp.value;
    }
//return (don't remove) the top value of a stack
    returnTop(){
        if(!this.top) {
            console.log("Nothing in this queue!");
            return null;
        }
        var top = this.top;
        return top.value
    }
    //return the number of stacked value
    stackSize(){
        var runner = this.top;
        var size = 0;
        while (runner){
            size++;
            runner = runner.next;
        }
        return size;

    }
    printStack(){
        if (!this.top){
            console.log("This stack is empty.");
        }
        else {
            var runner = this.top;
            var str = "Top Here!";
            while(runner){
                str += runner.value + "-->";
                runner = runner.next;
            }
            str += "Bottom Here!--> null";
            console.log(str);
        }
    }
}
var sls = new SLStack()
sls.push(3)
sls.push(18)
sls.push(12)
sls.push(78)
sls.push(56)
sls.push(14)
console.log(sls.pop())
console.log(sls.returnTop())
sls.printStack()
console.log(sls.stackSize())