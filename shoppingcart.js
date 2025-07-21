const storeItems = {
    soda : 5,
    gatorade : 6,
    water : 2,
};
const jsStoreItem = document.getElementById('store-items');

// this works but like it feels so inconvienient... like I think I can find a simpler solution 
//for (const key in storeItems) {
//     if (storeItems.hasOwnProperty(key)){ //this gets all the properties (no it doesn't)
//             let newTextNode = document.createTextNode(key + ' ' );
//            document.body.appendChild(newTextNode); 
//   }
//    };
// I want to add this to the store-items id...

 // getting element by ID


//right now this strategy relies on 
function storeItemsInList (anObject) {
    for (const key in storeItems) {
        if (storeItems.hasOwnProperty(key)){ //this gets all the properties (no it doesn't)
            storesSelectedItems =+ key;
            };
    };
};
jsStoreItem.textContent =+ storeItemsInList (storeItems);