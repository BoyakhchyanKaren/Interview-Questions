const array1 = ['1', '2', 3, 4, 'abc', {
    name: 'Karen'
}, [1, 2, 3], '213123123'];

const array2 = ['2', 5, 6, 7, 'abc', 'ddd', {
    name: 'Karen'
}, [1, 2, 3], 20, 50, 60, 80, 090];


// get common values even if there are objects or arrays which items are same.

const isDeeplyEqual = (item1, item2) => {
    return JSON.stringify(item1) === JSON.stringify(item2);
}

const getCommonValues = (arr1, arr2) => {

    // let [largerArray, smallerArray] = [arr1, arr2];
    const stack = [];

    // if (arr1.length < arr2.length) {
    //     [largerArray, smallerArray] = [smallerArray, largerArray];
    // };

    arr1.forEach((largerElement) => {
        arr2.forEach((smallerElement) => {
            if (largerElement === smallerElement) {
                stack.push(smallerElement);
            } else {
                const isEqual = isDeeplyEqual(largerElement, smallerElement);
                if (isEqual) {
                    stack.push(smallerElement);
                }
            }
        });
    });

    return stack;
};

const result = getCommonValues(array1, array2);
console.log(result);