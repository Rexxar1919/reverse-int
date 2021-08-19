module.exports = function reverse (n) {
    let str = String(n), reverse = "";
    console.log(str);
    for (let biba = str.length - 1; biba >= 0; biba--) {
        reverse += str[biba];
    }
    // let reverse = str.split('').reverse().join('');
    // let newN = parseInt(reverse, 10);
    return parseInt(reverse, 10);
}
