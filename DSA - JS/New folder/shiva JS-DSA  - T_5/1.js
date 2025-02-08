// Queue Using Two Stack
function QUTS() {
    //creat 1st empty stack
    let stack1 = [];
    // creat 2nd empty stack
    let stack2 = [];
    // function for add data in queue
    function add(element) {
        stack1.push(element);
    }

    // function for peek element
    function peek() {
        while (stack1.length > 1) {
            stack2.push(stack1.pop());
        }
        let peekEle = stack1.pop();
        console.log("Peeked element is ->", peekEle)
        stack1.push(peekEle)
        while (stack2.length > 0) {
            stack1.push(stack2.pop())
        }
    }

    // function for remove ele from front
    function Delete() {
        while (stack1.length > 1) {
            stack2.push(stack1.pop());
        }
        let Delet = stack1.pop();
        console.log("Deleted element is ->", Delet);
        while (stack2.length > 0) {
            stack1.push(stack2.pop())
        }
    }

    // function for print data
    function print() {
        let str = " ";
        for (let i = 0; i < stack1.length; i++) {
            str += stack1[i] + " ";
        }
        console.log("Queue is -> " + str)
    }
    return { add, print, peek, Delete }
}

// main function call
let mainFun = QUTS();

//add data
mainFun.add(5)
mainFun.add(6)
mainFun.add(7)
mainFun.add(8)

// peek element
mainFun.peek()

// peek element print data
mainFun.print()

// delete element
mainFun.Delete();

// print data
mainFun.print()

// peek element
mainFun.peek()

// print data
mainFun.print() 
