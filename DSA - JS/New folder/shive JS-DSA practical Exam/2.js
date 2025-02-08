// stack Using Two Queues
function SUTQ() {
    //creat 1st empty queue
    let queue1 = [];
    // create 2nd empty queue
    let queue2 = [];

    // function for add ele
    function add(element) {
        queue1.push(element);
    }

    //function for peek element
    function peek() {
        while (queue1.length > 1) {
            queue2.push(queue1.shift());
        }
        let peekElement = queue1.shift();
        console.log("Peeked element is =>", peekElement)
        while (queue2.length > 0) {
            queue1.push(queue2.shift())
        }
        queue1.push(peekElement)
    }

    // function for remove ele from front
    function Delete() {
        while (queue1.length > 1) {
            queue2.push(queue1.shift());
        }
        let DeleteElement = queue1.shift();
        console.log("Deleted element is =>", DeleteElement);
        while (queue2.length > 0) {
            queue1.push(queue2.shift())
        }
    }

    // function for print data
    function print() {
        let str = " ";
        for (let i = 0; i < queue1.length; i++) {
            str += queue1[i] + " ";
        }
        console.log("stack is => " + str)
    }
    return { add, print, peek, Delete }
}
let mainFun = SUTQ(); // main function call
//add data
mainFun.add(1)
mainFun.add(2)
mainFun.add(3)
mainFun.add(4)
mainFun.add(5)

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

