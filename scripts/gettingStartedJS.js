//alert('Hello World!'
// Add your JavaScript code here
// 1. Get a reference to the button element
let myButton = document.getElementById('button1');
// 2. Define some behaviour that should happen when the button is clicked
function handleClick() {
    console.log('The button has been clicked'); 
    //alert('The button has been clicked!');
    // 2.1 Get a reference to the h1 element
    let myHeading = document.getElementById('page-heading');

    console.log('Before:', myHeading.textContent); 
    // 2.2 Change the text within the h1 element
    myHeading.textContent = 'Now I am Dynamic!!!';

    console.log('After:', myHeading.textContent);
    // 2.3 Change the element's background colour
    myHeading.style.backgroundColor = '#586e75';
}
// 3. Link the behaviour defined in handleClick to "clicks" on the button
myButton.addEventListener('click', handleClick);