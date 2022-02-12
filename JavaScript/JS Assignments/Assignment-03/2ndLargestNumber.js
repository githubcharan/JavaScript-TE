console.log('*---2nd Largest Number---*');

const arr1 = [25, 36, 55, 99]
console.log('*--Named Function---*');

function Bsort(arr1) {
    let temp = 0
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 1; j < arr1.length - i; j++) {
            if (arr1[j - 1] > arr1[j]) {
                let temp = arr1[j - 1]
                arr1[j - 1] = arr1[j]
                arr1[j] = temp;
            }

        }
    }
    console.log(arr1[arr1.length - 2]);
}
Bsort(arr1)

console.log('*--Anonymous Function---*');

const bSort = function(arr1) {
    let temp = 0
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 1; j < arr1.length - i; j++) {
            if (arr1[j - 1] > arr1[j]) {
                temp = arr1[j - 1]
                arr1[j - 1] = arr1[j]
                arr1[j] = temp;
            }

        }
    }
    console.log(arr1[arr1.length - 2]);
}
bSort(arr1)

console.log('*--Self Invoked Function---*');

(function(arr1) {
    let temp = 0
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 1; j < arr1.length - i; j++) {
            if (arr1[j - 1] > arr1[j]) {
                temp = arr1[j - 1]
                arr1[j - 1] = arr1[j]
                arr1[j] = temp;
            }

        }
    }
    console.log(arr1[arr1.length - 2]);
})(arr1)

console.log('*--Arrow Function(ES6 feature)---*');

const bubbleSort = arr1 => {
    let temp = 0
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 1; j < arr1.length - i; j++) {
            if (arr1[j - 1] > arr1[j]) {
                temp = arr1[j - 1]
                arr1[j - 1] = arr1[j]
                arr1[j] = temp;
            }

        }
    }
    console.log(arr1[arr1.length - 2]);
}
bubbleSort(arr1)