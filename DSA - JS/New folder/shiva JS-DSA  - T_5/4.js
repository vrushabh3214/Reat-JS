
// Time Needed To Buy Tickets
function TNTBT(k) {
    let Tickets = [2, 3, 2];
    let Second = 0;
    let index = k;

    // Time Function to find out the seconds
    function Time() {
        while (Tickets[k] > 0) {
            for (let i = 0; i < Tickets.length; i++) {
                if (Tickets[i] > 0) {
                    Tickets[i]--;
                    Second++;
                }
                if (i === k) {
                    k--;
                }
            }
        }
        if (Tickets.length - 1 === index) {
            console.log(Second);
        }
        else {
            console.log(++Second);
        }
    }
    return { Time };
}
let mainFun = TNTBT(0);
mainFun.Time(); 
