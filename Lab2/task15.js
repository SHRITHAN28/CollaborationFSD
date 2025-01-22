function cp({ name, age, interests }) {
    const [primaryInterest, secondaryInterest] = interests;
    return { name, age, primaryInterest, secondaryInterest };
}
const prof = cp({ name: 'Abc', age: 25, interests: ['Reading', 'Traveling', 'Music'] });
console.log(prof);
//{ name:'Abc',age: 25,primaryInterest:'Reading',secondaryInterest:'Traveling'}