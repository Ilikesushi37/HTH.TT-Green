
const storeItems = {
    soda : 5,
    gatorade : 6,
    water : 2,
};


//translating the store-items id to be used in js
const jsStoreItem = document.getElementById('store-items');

//This really confusing but this function takes all the properties of my storeItems object and turns them into buttons with button.textcontent
Object.keys(storeItems).forEach(key => { //iterates the props
    const button = document.createElement('button'); //CREATES a new id called 'button' which matches the css name
    button.textContent = key; //change the name of the new button made with the current index

    let cartsTotal = document.getElementById('cart-total') //grab or translate the cart-total html id and turn it into js
    button.addEventListener('click', function () { //on event that a button is clicked, do something!
       for (const key in storeItems) { //iterate the storeitems object again!
            if (Object.prototype.hasOwnProperty.call(storeItems, key)) { 
                cartsTotal += storeItems[key];

  };
}
    });
    jsStoreItem.appendChild(button);
});

