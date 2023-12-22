const strings = ['abc', 'qwerty', 'tylenol', 'acc', 'a', '', 'aaaes2'];
// if there are more than 1 show array of string, if no show one.


const getLongStrings = (arrayOfStrings) => {
    if (!arrayOfStrings.length) {
        return arrayOfStrings;
    }


    const longLength = Math.max(...arrayOfStrings.map((string) => string.length));
    const longestStrings = arrayOfStrings.filter((currentString) => currentString.length === longLength);

    return longestStrings.length > 1 ? longestStrings : longestStrings[0];
}