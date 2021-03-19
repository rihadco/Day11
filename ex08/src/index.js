function myMutation(arr) {
    var a = arr[0].toLowerCase();
    var b = arr[1].toLowerCase();
    for (var i = 0; i < b.length; i++) {
        if (a.indexOf(b[i]) < 0) {
            return false;
        }
    }
    return true;
}
console.log(myMutation(["hello", "hey"]));  // Change this line
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));
module.exports = myMutation;