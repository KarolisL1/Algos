var isValid = function(s) {
    var stack = [];
    var map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    for (var i = 0; i < s.length; i++) {
        var c = s[i];
        if (c in map) {
            if (stack.pop() !== map[c]) {
                return false;
            }
        } else {
            stack.push(c);
        }
    }
    return stack.length === 0;
};

console.log(isValid('()'));