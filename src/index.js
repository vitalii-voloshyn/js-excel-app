import './scss/index.scss';

console.log('Hello world!');

async function hello(str) {
  const newStr = await str + 'dfd'
  console.log(newStr)
}

hello('Vasya')
