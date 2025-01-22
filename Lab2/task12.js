function createP({ name, email }) {
    return { name, email };
}
const profile = createProfile(
    {
        name: 'Abc', age: 28, email: 'abc.com'
    });
console.log(profile);
