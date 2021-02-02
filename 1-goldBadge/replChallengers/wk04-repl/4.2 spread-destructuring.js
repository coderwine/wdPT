/*
    - with the given shoppingList array, use array destructuring to assign each array within the shoppingList array its own variable. Then, reinitialize the shoppingList array so it is a single array containing all of the values from the original array. 
    
    - after the shoppingList array has been reinitialized, using the array.prototype.map method, map over the newly initialized shoppingList array. You should do the following within the map method:
        - include a parameter for index
        - utilize the array.prototype.push method to push the current value being mapped over into the appropriate key/value pair in the obj variable
            - you will need to implement some sort of logic to check the index of the current item being mapped over.
*/

/*
    STUDENTS SHOULD START WITH THE FOLLOWING CODE: 

    let shoppingList = [[ 'eggs', 'milk', 'butter' ], [ 'cleaner', 'trash bags', 'detergent' ], [ 'thank you card', 'pens', 'gift wrapping' ], [ 'shoes', 't-shirt', 'slacks' ]];

    let obj = {
    cleaning: [],
    gifts: [],
    clothing: [],
    grocery: []
};

*/

let shoppingList = [['eggs', 'milk', 'butter'], ['cleaner', 'trash bags', 'detergent'], ['thank you card', 'pens', 'gift wrapping'], ['shoes', 't-shirt', 'slacks']];
// console.log(shoppingList);

const [grocery, cleaning, gifts, clothing] = shoppingList;

shoppingList = [...grocery, ...cleaning, ...gifts, ...clothing];
// console.log(shoppingList);

let obj = {
    cleaning: [],
    gifts: [],
    clothing: [],
    grocery: []
};

shoppingList.map((item, key) => {
    console.log(item, key)
    if (key >= 0 && key <= 2) {
        obj.grocery.push(item);
    } else if (key >= 3 && key <= 5) {
        obj.cleaning.push(item);
    } else if (key >= 6 && key <= 8) {
        obj.gifts.push(item);
    } else {
        obj.clothing.push(item);
    }
})

console.log(obj);