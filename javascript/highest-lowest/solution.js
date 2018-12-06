highAndLow = (a) => `${Math.max.apply(null, a.split(' '))} ${Math.min.apply(null, a.split(' '))}`

function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}