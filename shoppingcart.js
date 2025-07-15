const storeItems = {
    soda : 3,
    gatorade : 5,
    water : 1,
};


// WHY WON'T THIS WORK?!!!
//this inputs the text nodes from the button tag and creates a list :)
const buttons = document.getElementsByTagName('button');
const cart = document.getElementById("cart")



for (const btn of buttons) {
console.log('im in the for loop');
    // listen for click events
    // call the changeBackground() function when the event is triggered
    // note that the event handler argument is an anonymous function that accepts the event object as a parameter
    btn.addEventListener('click', cartElement.classList.add(btn))
};
console.log("please work")