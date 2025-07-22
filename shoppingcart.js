
const storeItems = {
    soda : 5,
    gatorade : 6,
    water : 2,
};


//translating the store-items id to be used in js
const jsStoreItem = document.getElementById('store-items');

//This really confusing confunction takes all the keys of my storeItems object and turns them into button with button.textcontent
Object.keys(storeItems).forEach(key => { //iterates the keys
    const button = document.createElement('button'); //
    button.textContent = key; 

    const cartsTotal = document.getElementById('cart-total')
    button.addEventListener('click', () => {
       cartsTotal =+ (storeItems[key]);
    });
    jsStoreItem.appendChild(button);
});