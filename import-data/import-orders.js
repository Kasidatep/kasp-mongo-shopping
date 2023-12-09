var admin = require("firebase-admin");
const { getFirestore } = require('firebase-admin/firestore')
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "firebase-adminsdk-yluly@int305fb004-app.iam.gserviceaccount.com"
});

var db = getFirestore() ;

const orders = [
  {
    customerUsername: "john_doe",
    products: [
      { productId: 1, name: "Smartphone X", quantity: 2, price: 699.99 },
      { productId: 7, name: "Coffee Maker", quantity: 1, price: 69.99 }
    ],
    orderDate: new Date("2023-12-15T08:30:00Z"),
    totalAmount: (2 * 699.99) + (1 * 69.99),
    status: "pending",
    shippingAddress: {
      street: "123 Main Street",
      city: "Cityville",
      country: "USA"
    },
    paymentMethod: "credit_card",
    paymentStatus: "paid",
    deliveryMethod: "standard",
    estimatedDeliveryDate: new Date("2023-12-20T00:00:00Z"),
    notes: "Leave package at the doorstep"
  },
  {
    customerUsername: "john_doe",
    products: [
      { productId: 4, name: "Running Shoes", quantity: 1, price: 89.99 },
      { productId: 2, name: "Laptop Pro", quantity: 3, price: 1299.99 }
    ],
    orderDate: new Date("2023-12-16T10:45:00Z"),
    totalAmount: (1 * 89.99) + (3 * 1299.99),
    status: "shipped",
    shippingAddress: {
      street: "123 Main Street",
      city: "Cityville",
      country: "USA"
    },
    paymentMethod: "paypal",
    paymentStatus: "paid",
    deliveryMethod: "express",
    estimatedDeliveryDate: new Date("2023-12-18T00:00:00Z"),
    notes: ""
  },
  {
    customerUsername: "john_doe",
    products: [
      { productId: 14, name: "Professional Blender", quantity: 1, price: 399.99 },
      { productId: 13, name: "Home Security Camera", quantity: 2, price: 149.99 }
    ],
    orderDate: new Date("2023-12-17T12:15:00Z"),
    totalAmount: (1 * 399.99) + (2 * 149.99),
    status: "pending",
    shippingAddress: {
      street: "123 Main Street",
      city: "Cityville",
      country: "USA"
    },
    paymentMethod: "credit_card",
    paymentStatus: "pending",
    deliveryMethod: "standard",
    estimatedDeliveryDate: new Date("2023-12-22T00:00:00Z"),
    notes: "Handle with care"
  },
  {
    customerUsername: "emma_jones",
    products: [
      { productId: 3, name: "The Mongoset Sofa", quantity: 1, price: 499.99 },
      { productId: 7, name: "Coffee Maker", quantity: 3, price: 69.99 }
    ],
    orderDate: new Date("2023-12-18T15:30:00Z"),
    totalAmount: (1 * 499.99) + (3 * 69.99),
    status: "shipped",
    shippingAddress: {
      street: "987 Oak Avenue",
      city: "Townsville",
      country: "USA"
    },
    paymentMethod: "paypal",
    paymentStatus: "paid",
    deliveryMethod: "express",
    estimatedDeliveryDate: new Date("2023-12-21T00:00:00Z"),
    notes: "Fragile items"
  },
  {
    customerUsername: "alex_wong",
    products: [
      { productId: 6, name: "Designer Watch", quantity: 2, price: 299.99 },
      { productId: 15, name: "Leather Handbag", quantity: 1, price: 179.99 }
    ],
    orderDate: new Date("2023-12-19T09:45:00Z"),
    totalAmount: (2 * 299.99) + (1 * 179.99),
    status: "pending",
    shippingAddress: {
      street: "567 Pine Road",
      city: "Districtville",
      country: "USA"
    },
    paymentMethod: "credit_card",
    paymentStatus: "pending",
    deliveryMethod: "standard",
    estimatedDeliveryDate: new Date("2023-12-24T00:00:00Z"),
    notes: "No rush"
  },
  {
    customerUsername: "olivia_miller",
    products: [
      { productId: 10, name: "Wireless Earbuds",  quantity: 2 ,price: 79.99 },
      { productId: 12, name: "Backpacker's Tent" , quantity: 2, price: 129.99 }
    ],
    orderDate: new Date("2023-12-20T11:00:00Z"),
    totalAmount: (2 * 79.99) + (2 * 129.99),
    status: "shipped",
    shippingAddress: {
      street: "876 Elm Street",
      city: "Citytown",
      country: "USA"
    },
    paymentMethod: "paypal",
    paymentStatus: "paid",
    deliveryMethod: "express",
    estimatedDeliveryDate: new Date("2023-12-23T00:00:00Z"),
    notes: ""
  },
  {
    customerUsername: "olivia_miller",
    products: [
      { productId: 4, name: "Running Shoes", quantity: 3, price: 89.99 },
      { productId: 5, name: "HD Smart TV", quantity: 1, price: 899.99 }
    ],
    orderDate: new Date("2023-12-21T14:20:00Z"),
    totalAmount: (3 * 89.99) + (1 * 899.99),
    status: "pending",
    shippingAddress: {
      street: "876 Elm Street",
      city: "Citytown",
      country: "USA"
    },
    paymentMethod: "credit_card",
    paymentStatus: "pending",
    deliveryMethod: "standard",
    estimatedDeliveryDate: new Date("2023-12-26T00:00:00Z"),
    notes: "Gift wrapping required"
  },
  {
    customerUsername: "sophia_roberts",
    products: [
      {  productId: 15, name: "Leather Handbag", quantity: 2, price: 179.99 },
      {  productId: 3, name: "The Mongoset Sofa", quantity: 1, price: 499.99 }
    ],
    orderDate: new Date("2023-12-22T17:00:00Z"),
    totalAmount: (2 * 179.99) + (1 * 499.99),
    status: "shipped",
    shippingAddress: {
      street: "765 Cedar Lane",
      city: "Villagetown",
      country: "USA"
    },
    paymentMethod: "paypal",
    paymentStatus: "paid",
    deliveryMethod: "express",
    estimatedDeliveryDate: new Date("2023-12-25T00:00:00Z"),
    notes: "Urgent delivery"
  },
  {
    customerUsername: "ryan_clark",
    products: [
      { productId: 6, name: "Designer Watch", quantity: 1, price: 299.99 },
      { productId: 9, name: "Outdoor Grill", quantity: 4, price: 249.99 }
    ],
    orderDate: new Date("2023-12-23T10:30:00Z"),
    totalAmount: (1 * 299.99) + (4 * 249.99),
    status: "pending",
    shippingAddress: {
      street: "890 Maple Street",
      city: "Treetown",
      country: "USA"
    },
    paymentMethod: "credit_card",
    paymentStatus: "pending",
    deliveryMethod: "standard",
    estimatedDeliveryDate: new Date("2023-12-28T00:00:00Z"),
    notes: "Fragile items, handle with care"
  },
  {
    customerUsername: "ava_jackson",
    products: [
      {productId: 11, name: "Digital Camera", quantity: 3, price: 599.99 },
      {productId: 9, name: "Outdoor Grill", quantity: 2, price: 299.99 }
    ],
    orderDate: new Date("2020-12-24T12:45:00Z"),
    totalAmount: (3 * 599.99) + (2 * 299.99),
    status: "shipped",
    shippingAddress: {
      street: "345 Oak Lane",
      city: "Treecity",
      country: "USA"
    },
    paymentMethod: "paypal",
    paymentStatus: "paid",
    deliveryMethod: "express",
    estimatedDeliveryDate: new Date("2020-12-27T00:00:00Z"),
    notes: ""
  },
  {
    customerUsername: "ava_jackson",
    products: [
      {productId: 12, name: "Backpacker's Tent", quantity: 2, price: 129.99 },
      {productId: 13, name: "Home Security Camera", quantity: 1, price: 149.99 }
    ],
    orderDate: new Date("2023-12-25T09:00:00Z"),
    totalAmount: (2 * 129.99) + (1 * 149.99),
    status: "pending",
    shippingAddress: {
      street: "789 Maple Lane",
      city: "Mapletown",
      country: "USA"
    },
    paymentMethod: "credit_card",
    paymentStatus: "pending",
    deliveryMethod: "standard",
    estimatedDeliveryDate: new Date("2023-12-30T00:00:00Z"),
    notes: "Gift for special occasion"
  },
  {
    customerUsername: "ava_jackson",
    products: [
      { productId: 3, name: "The Mongoset Sofa", quantity: 1, price: 499.99 },
      { productId: 8, name: "Gaming Console", quantity: 2, price: 449.99 }
    ],
    orderDate: new Date("2023-12-26T14:30:00Z"),
    totalAmount: (1 * 499.99) + (2 * 449.99),
    status: "shipped",
    shippingAddress: {
      street: "789 Maple Lane",
      city: "Mapletown",
      country: "USA"
    },
    paymentMethod: "paypal",
    paymentStatus: "paid",
    deliveryMethod: "express",
    estimatedDeliveryDate: new Date("2024-01-02T00:00:00Z"),
    notes: "Handle with care"
 
  }]



orders.forEach(function(obj){
  db.collection("assignment-orders").add(obj).then(async docRef => {
    console.log("'"+docRef.id +"' ,")
    })

});



