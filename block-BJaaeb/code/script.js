/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

// Your code goes here
  function createInputElm (label, type= "text"){
    let labelElement = document.createElement('label');
    let text = document.createTextNode('This is a label');
    labelElement.append(text);
    let inputElm = document.createElement('input');
    inputElm.type = type;
    labelElement.appendChild(inputElm);
    return labelElement;
  }
// TEST

createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`
function createInputElm(label, type = "text"){
  return `<label>${label}<input type = "${type}"/></label>`
}
// Your code goes here

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes

function createList (array) {
  let ul = document.createElement('ul');
  array.forEach((fruit) => {
    let li = document.createElement('li');
    li.innerText = fruit;
    ul.append(li);
  });
  return ul;
}

// TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here
function createTodoList (array) {
  let ul = document.createElement('ul');
  array.forEach((item) => {
    let li = document.createElement('li');
    let para = document.createElement('p');
    let paraText = document.createTextNode(item.name);
    para.appendChild(paraText);
    let input = document.createElement('input');
    input.type = "checkbox"
    input.checked = true;
    input.name = ""
    input.id = ""
    let span = document.createElement('span');
    let spanText = document.createTextNode('X');
    span.append(spanText);
    li.append(para, input, span);
    ul.appendChild(li);
  });
  return ul;
}

// TEST
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);
