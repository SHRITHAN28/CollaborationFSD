const rev =
{
    array: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let index = this.array.length - 1;
        return {
            next: () => {
                if (index >= 0) {
                    return { value: this.array[index--], done: false };
                }
                return { done: true };
            },
        };
    },
};
for (const val of rev) {
    console.log(val); //4 3 2 1
}