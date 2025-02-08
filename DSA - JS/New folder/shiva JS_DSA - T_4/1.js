function Balanced(exp) {
    // Create a stack to keep track of opening brackets
    let stack = [];
    
    // Traverse each character in the expression string
    for (let i = 0; i < exp.length; i++) {
        let char = exp[i];
        
        // If the character is an opening bracket, push it onto the stack
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } 
        // If the character is a closing bracket
        else if (char === ')' || char === '}' || char === ']') {
            // Check if the stack is empty or if the top of the stack doesn't match the closing bracket
            if (stack.length === 0) {
                return 'Not Balanced';
            }
            
            // Get the top element of the stack
            let top = stack.pop();
            
            // Check if the top element matches the current closing bracket
            if ((char === ')' && top !== '(') ||
                (char === '}' && top !== '{') ||
                (char === ']' && top !== '[')) {
                return 'Not Balanced';
            }
        }
    }
    
    // If the stack is empty, all brackets are balanced
    if (stack.length === 0) {
        return 'Balanced';
    } else {
        return 'Not Balanced';
    }
}

// Test cases
console.log(Balanced("[()]{}{[()()]()}")); // Output: Balanced
console.log(Balanced("[(])"));             // Output: Not Balanced
