function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function Min(arr) {
  var min = arr[0];
  for(let i = 1; i < 1000; i++) {
    if (arr[i] < min)
    min = arr[i];
  }
  return min;
}

function Max(arr) {
  var max = arr[0];
  for(let i = 1; i < 1000; i++) {
    if (arr[i] > max)
    max = arr[i];
  }
  return max;
}

function quickSort(arr, left, right) {
    var index;
    if (arr.length > 1) {
        index = partition(arr, left, right);
        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }
        if (index < right) {
            quickSort(arr, index, right);
        }
    }
    return arr;
}

function partition(arr, left, right) {
    var pivot = arr[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
          var temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          i++;
          j--;
        }
    }
    return i;
}

function mid(arr) {
  var temp = quickSort(arr, 0, arr.length - 1);
  return temp[(arr.length - arr.length % 2) / 2];
}

function logMapElements(value, key, map) {
  alert(`${key} - ${value}`);
}

var arr = [];
for(let i = 0; i < 1000; i++) {
  arr.push(getRandomInt(100));
}

alert(Min(arr));
alert(Max(arr));
alert(mid(arr));
alert(quickSort(arr, 0, 999));
var tags = document.querySelectorAll('*');
var map = new Map();
for(let i = 0; i<tags.length; i++) {
  if (map.has(tags[i].tagName)){
    map.set(tags[i].tagName, map.get(tags[i].tagName) + 1);
  }
  else {
    map.set(tags[i].tagName, 1);
  }
}

map.forEach(logMapElements);
