console.log('*--BubbleSort---*');

const arr1 = [56, 2, 3, 95, 78, 47, 6, 58, 36, 85]
console.log('*--Named Function---*');

function Bsort(arr1) {
    let temp = 0
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length - i - 1; j++) {
            if (arr1[j] > arr1[j + 1]) {
                let temp = arr1[j]
                arr1[j] = arr1[j + 1]
                arr1[j + 1] = temp;
            }

        }
    }
    console.log(arr1);
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
    console.log(arr1);
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
    console.log(arr1);
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
    console.log(arr1);
}
bubbleSort(arr1)