
//prompt 1. Object of store products and their prices
const storeItems = {
    shampoo : 10,
    conditioner : 12,
    bodyWash : 10,
    scrub : 10,
    cleanser : 15,
    moisurizer : 20,
    eyeCream : 50,
    hairbrush : 8,
    comb : 7,
};

//prompt 2. array of items in a shopping cart
const shoppingCart = ['cleanser', 'moisurizer', 'hairbrush', 'scrub'];

//prompt 3. a function that returns shopping cart total
function findTotalOf (object){ 
    let totalofProps = 0;
    for (const props in object){
        totalofProps += object[props];
    };
    return totalofProps;
};
console.log(findTotalOf(storeItems));
