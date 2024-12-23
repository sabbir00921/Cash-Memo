let cart = []

// ! Selection
const category = document.querySelector('#category');
const name = document.querySelector('#name');
const price = document.querySelector('#price');
const nextButton = document.querySelector('#nextButton');
const printMemoButton = document.querySelector('#printMemoButton');
const quantity = document.querySelector('#qty');

class Food {
    constructor(name, category, price, quantity, discount = 5, type = "food") {
        this.name = name;
        this.category = category;
        this.price = price;
        this.discount = discount;
        this.type = type;
        this.quantity = quantity;
    }

}

class Apparel {
    constructor(name, category, price, quantity, discount = 20, type = "apparel") {
        this.name = name;
        this.category = category;
        this.price = price;
        this.discount = discount;
        this.type = type;
        this.quantity = quantity;
    }
}

class Others {
    constructor(name, category, price, quantity, discount = 15, type = "others") {
        this.name = name;
        this.category = category;
        this.price = price;
        this.discount = discount;
        this.type = type;
        this.quantity = quantity;
    }
}

nextButton.addEventListener('click', () => {
    // const item = new Food(name.value.trim(), category.value, price.value, quantity.value.trim());
    // console.log(item);
    if (category.value === "food") {
        const item = new Food(name.value.trim(), category.value, price.value, quantity.value);
        // console.log(item);
        cart.push(item)
    }
    else if (category.value === "apparel") {
        const item = new Apparel(name.value.trim(), category.value, price.value, quantity.value);
        // console.log(item);
        cart.push(item)
    }
    else if (category.value === "others") {
        const item = new Others(name.value.trim(), category.value, price.value, quantity.value);
        // console.log(item);
        cart.push(item)
    }

})
// let item1 = new Food("rice", "Food", 250)
console.log(cart);