const arrayOfNumbers = [1, 1, 2, 2, 2, 3, 4, 4, 4, 5, 5, 6, 7, 7, 7, 7, 8, 8, 9]; //3, 6, 9;
//if there are duplicate numbers, they should be removed from array, don't leave one, completelly delete them.


const removeDuplicates = (array) => {
    const uniqueNumbers = [...new Set(array)];

    const result = uniqueNumbers.filter(num => {
        // filter and return all items according to condition.
        return arrayOfNumbers.indexOf(num) === arrayOfNumbers.lastIndexOf(num);
    });

    return result;
};