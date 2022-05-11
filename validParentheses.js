var isValid = function(s) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let thing of s) {
        if (map[thing]) {
            stack.push(map[thing]);
        } 
        else 
        {
            if (stack.pop() !== thing) return false;
        }
    }
    return (!stack.length);
};

console.log(isValid('()'));