function reverseStringUsingStack(str) {
    // Initialize an empty stack
    let stack = [];
  
    // Push each character of the string onto the stack
    for (let i = 0; i < str.length; i++) {
      stack.push(str[i]);
    }
  
    // Initialize an empty string to store the reversed string
    let reversedStr = "";
  
    // Pop each character from the stack and build the reversed string
    while (stack.length > 0) {
      reversedStr += stack.pop();
    }
  
    return reversedStr;
  }
  
  // Test cases
  console.log(reverseStringUsingStack("radheShyam")); // Output: "mayhSehdar"
  console.log(reverseStringUsingStack("abc"));        // Output: "cba"
  