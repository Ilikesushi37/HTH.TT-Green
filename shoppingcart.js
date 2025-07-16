const storeItems = {
    soda : 5,
    gatorade : 6,
    water : 2,
};

let jsStoreItems = document.getElementById('store-items'); // I want to take these 

for (const key in storeItems) {
        jsStoreItems.classList.add(key);
    };

console.log(jsStoreItems)