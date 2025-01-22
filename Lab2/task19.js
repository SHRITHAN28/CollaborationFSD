function* inf() {
    let num = 1;
    while (true) {
        yield num++;
    }
}
const seq = inf();
for (let i = 0; i < 5; i++) {
    console.log(seq.next().value);//1 2 3 4 5
}