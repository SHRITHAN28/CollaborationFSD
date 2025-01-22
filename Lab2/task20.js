const iterable = {
    array: [10, 20, 30],
    reset() {
        this[Symbol.iterator] = function () {
            let index = 0;
            return {
                next: () => {
                    if (index < iterable.array.length) {
                        return { value: iterable.array[index++], done: false };
                    }
                    return { done: true };
                },
            };
        };
    },
};
iterable.reset();
for (const value of iterable) {
    console.log(value); //10 20 30
}
//we need to reset the iterator
iterable.reset();
for (const value of iterable) {
    console.log(value); //10 20 30
}
