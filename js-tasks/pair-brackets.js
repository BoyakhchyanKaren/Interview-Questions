const bracketsExample1 = '((()))'; // true
const bracketsExample2 = '((()))()((())'; // false
const bracketsExample3 = '((()))()(())'; // true
const bracketsExample4 = '))))))(((((('; // true

const areAllBracketsHavePair = (brackets) => {
    const stack = [];
    const firsItem = brackets[0];

    const doWithCondition = (symbol) => {
        for (let i = 0; i < brackets.length; i++) {
            if (brackets[i] === symbol) {
                stack.push(brackets[i]);

            } else {
                const lastElement = stack.pop();
                if (!lastElement) {
                    return false;
                }
            }
        }
        return !stack.length;
    };
    return doWithCondition(firsItem);
};