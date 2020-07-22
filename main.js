let Arr1 = [2, 7, 4, 'Alex', 3, 8, 4, 1, true];
console.log(Arr1);
let Arr2 = [5, 7, 4, 3, 5, false, 9, true, 'Apple', 2, 'Juice', 1];
console.log(Arr2);

function sumCount (Arr) {
  let sum = 0;
  for (i = 0; i < Arr.length; i++) {
    if (typeof Arr[i] == 'number') {
      sum += Arr[i];
    }
  } return sum;
}

function compare(Arr1, Arr2) {
  var sum1 = sumCount(Arr1);
  console.log('Сумма числовых элементов первого массива равна' + ' ' + sum1);
  var sum2 = sumCount(Arr2);
  console.log('Сумма числовых элементов второго массива равна' + ' ' + sum2);
    if (sum1 > sum2) {
      return Arr1;
  } else {
    return Arr2;
  }
}

console.log(compare(Arr1, Arr2));