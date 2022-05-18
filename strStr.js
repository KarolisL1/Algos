var strStr = function(haystack, needle) {
    if (needle.length === 0) return -1;
    for (let i = 0; i<haystack.length; i++){
        let k = i;
        let j = 0;
        while(haystack[k] == needle[j] & j < needle.length){
            k++
            j++
        }
        if(needle.length == j) return i
    }
    return -1
};

console.log(strStr("hello", "ll"));