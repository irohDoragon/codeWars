// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

function reverseWords(str) {
    return str.split(' ').map(element => element.split('').reverse().join('')).join(' ')
  }