//
// Challenge 1: Dynamic State Update (Multiple Properties)

const state = {
  counter: 10,
  user: {
    name: "Charlie",
    age: 28,
    email: "charlie@example.com",
  },
  isLoggedIn: true,
  role: "admin",
};

//*
// Task: Write a function updateState that:
// Takes in a property (e.g., counter, user.name, isLoggedIn, role) and a new value (e.g., 20, 'user', false, etc.).
// Returns a new state object with the specified property updated to the new value.

const updateState = (property, value) => {
  const keys = property.split(".");
  const newState = { ...state };

  let obj = newState;
  keys.forEach((key, index) => {
    if (index === keys.length - 1) {
      obj[key] = value;
    } else {
      obj[key] = { ...obj[key] };
    }
    obj = obj[key];
  });

  return newState;
};

// console.log("result", updateState("role", "Owner"), state);

//**
// Challenge 2: Deep Clone and Modify Nested Properties
// Task:
// Create a deep copy of the state object (i.e., clone all nested properties).
// Modify the city inside address to 'Los Angeles'.
// Modify the isActive property to false.
// Return the modified new object without altering the original state.
//  */

const State = {
  user: {
    name: "Alice",
    details: {
      age: 25,
      address: {
        street: "123 Main St",
        city: "New York",
        hobbies: ["Reading", "Cooking", "Traveling"],
      },
    },
  },
  isActive: true,
};

const cloneObejct = (obj) => {
  if (obj == null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(cloneObejct);
  }

  const newState = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newState[key] = cloneObejct(obj[key]);
    }
  }
  return newState;
};

const newState = cloneObejct(State);

newState.user.details.address.city = "Los Angeles";
newState.user.details.address.hobbies[0] = "Los Angeles";

newState.isActive = false;
// console.log("result", JSON.stringify(newState), JSON.stringify(State));

//**
// Challenge 3: Cart Manipulation (Add and Remove Items)
//
//Task:

// Write a function addItem that:
// Takes an item (with properties like id, name, price), adds it to the items array, and updates the totalPrice.
// Write a function removeItem that:
// Takes an id of the item to be removed, removes the corresponding item from the items array, and updates the totalPrice.
// Write a function applyDiscount that:
// Takes a discount (in percentage) and reduces the totalPrice by that percentage.
// The final cart object should reflect the updated list of items and the correct totalPrice.
//  */

const cart = {
  items: [
    { id: 1, name: "T-shirt", price: 20 },
    { id: 2, name: "Jeans", price: 40 },
  ],
  totalPrice: 60,
};
const item = { id: 3, name: "toy", price: 60 };

const addItem = (item) => {
  if (!item) {
    return "Enter valid Item";
  }

  const newCart = {
    ...cart,
    items: [...cart.items, item],
    totalPrice: cart.totalPrice + item.price,
  };
  return newCart;
};

const removeItem = (id) => {
  const newCart = {
    ...cart,
    items: cart.items.filter((item) => id !== item.id),
  };
  return newCart;
};

const applyDiscount = (discount) => {
  const newCart = { ...cart, totalPrice: cart.totalPrice * discount };
  return newCart;
};

// console.log("cartAddResult", addItem(item), cart);
console.log("cartRemoveResult", removeItem(2), cart);
console.log("cartDiscountResult", removeItem("5%"), cart);
