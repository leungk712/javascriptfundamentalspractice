const person = {
    name: 'Kevin',
    hobbies: ['walking', 'talking', 'eating'],
    height: 68,
    weight: 154
}

const { name, hobbies, height, weight } = person;

const root = document.querySelector('.root');
const superSubRoot = document.querySelector('.super-sub-root');

console.log(superSubRoot.parentElement);
console.log(root.childNodes);