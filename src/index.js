module.exports = function reverse (n) {
    let val = n.toString().split('').reverse().join('');

  if (val.endsWith('-')) {
      return parseInt(val);
  }
  else {
    return parseInt(val);
  }
    
}
