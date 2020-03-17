module.exports = function check(str, bracketsConfig) {
  var str = str.split('');
  if (str.length % 2 !== 0) {
    return false;
  }
  var open = '';
  var close = '';
  var stock = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    open = open + bracketsConfig[i][0];
  }
  for (let i = 0; i < bracketsConfig.length; i++) {
    close = close + bracketsConfig[i][1];
  }
  for (let i = 0; i < str.length; i++) {
    if (open.includes(str[i]) && !close.includes(str[i])) {
      stock.push(str[i]);
    } else if (close.includes(str[i]) && !open.includes(str[i])) {
      if (open.indexOf(stock[stock.length - 1]) == close.indexOf(str[i])) {
        stock.pop();
      } else {

      }
    } else if (open.includes(str[i]) && close.includes(str[i])) {
      if (stock[stock.length - 1] == str[i]) {
        stock.pop();
      } else {
        stock.push(str[i]);
      }
    }
  }
  if (stock.length == 0) {
    return true
  }
  return false
}
