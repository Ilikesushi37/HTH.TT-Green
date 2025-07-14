const storeItems = {
    soda : 3,
    gatorade : 5,
    water : 1,
};
const buttonList = document.getElementsByTagName('button');
for (const btn of buttonList) {
    console.log('im in the for loop');
    // listen for click events
    // call the changeBackground() function when the event is triggered
    // note that the event handler argument is an anonymous function that accepts the event object as a parameter
    btn.addEventListener('click', (event) => changeBackground(event, event.target.textContent));
