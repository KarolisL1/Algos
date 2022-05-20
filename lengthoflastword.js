var lengthOfLastWord = function(s) {
    let something = s.trim().split(/\s+/)
    return (something[something.length - 1].length)
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));