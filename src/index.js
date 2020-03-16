module.exports = function check(str, bracketsConfig) {
  var str = str.split('');
  if (str.length % 2 !== 0) {
    return false;
  }
  var open = '';
  var close = '';
  var stock = [];
  //получаем все открывающие скобки
  for (let i = 0; i < bracketsConfig.length; i++) {
    open = open + bracketsConfig[i][0];
  }
  //получаем все закрывающие скобки
  for (let i = 0; i < bracketsConfig.length; i++) {
    close = close + bracketsConfig[i][1];
  }
  for (let i = 0; i < str.length; i++) {
    if (open.includes(str[i])) {
      stock.push(str[i]);
    } else if (stock.length == 0) {
      console.log("false");
      return false
    } else if (open.indexOf(stock[stock.length - 1]) !== close.indexOf(str[i])) {
      console.log('false');
      return false
    }
  }
  console.log('true');
  console.log('end')
}
