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
      { productId: "BBNNw0k0Pny2ztYgNYzN", quantity: 2, price: 699.99 },
      { productId: "TdFLGiCAkapFQhOKW7CH", quantity: 1, price: 69.99 }
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
      { productId: "kDWJlg7vEKIMeJqqjYsE", quantity: 1, price: 89.99 },
      { productId: "opDe2ZZQLzaSSQJkHKZl", quantity: 3, price: 1299.99 }
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
      { productId: "NNV77XuvnjT6Nlel2ad8", quantity: 1, price: 399.99 },
      { productId: "3HDzl30oXGoSUIejNobK", quantity: 2, price: 149.99 }
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
      { productId: "qSNV8pBotfZHAnQbFinY", quantity: 1, price: 499.99 },
      { productId: "DZfP6wcpqY8RihMnwINY", quantity: 3, price: 199.99 }
    ],
    orderDate: new Date("2023-12-18T15:30:00Z"),
    totalAmount: (1 * 499.99) + (3 * 199.99),
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
      { productId: "4TEEKf6kceSW0pJWlezI", quantity: 2, price: 99.99 },
      { productId: "C9ONtAt46vh0gPZo2vfj", quantity: 1, price: 179.99 }
    ],
    orderDate: new Date("2023-12-19T09:45:00Z"),
    totalAmount: (2 * 99.99) + (1 * 179.99),
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
      { productId: "AitrPK9ASmgDJfe4wo0X", quantity: 1, price: 349.99 },
      { productId: "UcPYwwi0NsJgxAIVIitA", quantity: 2, price: 129.99 }
    ],
    orderDate: new Date("2023-12-20T11:00:00Z"),
    totalAmount: (1 * 349.99) + (2 * 129.99),
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
      { productId: "9kECMUFOYMOVuSfxyASw", quantity: 3, price: 59.99 },
      { productId: "bfnPoSvS4NB06mowTvcB", quantity: 1, price: 299.99 }
    ],
    orderDate: new Date("2023-12-21T14:20:00Z"),
    totalAmount: (3 * 59.99) + (1 * 299.99),
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
      { productId: "9pduZkdKECNQ3ffz2kxU", quantity: 2, price: 179.99 },
      { productId: "5tG2EEHX32DdII83YD61", quantity: 1, price: 499.99 }
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
      { productId: "CLalmSoZA4g1wpiBnyKV", quantity: 1, price: 99.99 },
      { productId: "lRmAYOKnLoqdfWbFCY2l", quantity: 4, price: 49.99 }
    ],
    orderDate: new Date("2023-12-23T10:30:00Z"),
    totalAmount: (1 * 99.99) + (4 * 49.99),
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
      { productId: "D9xUWZLFzpfbOFsQv5bO", quantity: 3, price: 119.99 },
      { productId: "X2bj0UaaIKlPLH5qWE42", quantity: 2, price: 299.99 }
    ],
    orderDate: new Date("2020-12-24T12:45:00Z"),
    totalAmount: (3 * 119.99) + (2 * 299.99),
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
      { productId: "JLuHwoU42qNZHXIyFGal", quantity: 2, price: 179.99 },
      { productId: "mF7X5O2HzJfz3oY6wxXb", quantity: 1, price: 349.99 }
    ],
    orderDate: new Date("2023-12-25T09:00:00Z"),
    totalAmount: (2 * 179.99) + (1 * 349.99),
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
      { productId: "P98sNuHJbHvFjR0qytDO", quantity: 1, price: 499.99 },
      { productId: "Y8as2WxExeI4YtoFTFpy", quantity: 2, price: 199.99 }
    ],
    orderDate: new Date("2023-12-26T14:30:00Z"),
    totalAmount: (1 * 499.99) + (2 * 199.99),
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



