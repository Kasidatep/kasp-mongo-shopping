var admin = require("firebase-admin");
const { getFirestore } = require('firebase-admin/firestore')
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "firebase-adminsdk-yluly@int305fb004-app.iam.gserviceaccount.com"
});

var db = getFirestore() ;

const products = [
  {
    "productId":1,
    "name": "Smartphone X",
    "description": "A powerful and sleek smartphone with advanced features.",
    "price": 699.99,
    "category": "Electronics",
    "brand": "TechCo",
    "stock": 50,
    "ratings": [{"user": "john_doe", "rating": 4.7}],
    "reviews": [{"user": "john_doe", "comment": "Great phone, very fast!"}],
    "image_url": "https://example.com/smartphone-x.jpg"
  },
  {
    "productId":2,
    "name": "Laptop Pro",
    "description": "High-performance laptop for work and entertainment.",
    "price": 1299.99,
    "category": "Electronics",
    "brand": "TechGear",
    "stock": 30,
    "ratings": [{"user": "john_doe", "rating": 4.5}],
    "reviews": [{"user": "john_doe", "comment": "Excellent laptop for programming!"}],
    "image_url": "https://example.com/laptop-pro.jpg"
  },
  {
    "productId":3,
    "name": "The Mongoset Sofa",
    "description": "A stylish and comfortable sofa for your living room.",
    "price": 499.99,
    "category": "Furniture",
    "brand": "HomeStyle",
    "stock": 20,
    "ratings": [{"user": "emma_jones", "rating": 4.8}],
    "reviews": [{"user": "emma_jones", "comment": "Love the design and comfort!"}],
    "image_url": "https://example.com/comfortable-sofa.jpg"
  },
  {
    "productId":4,
    "name": "Running Shoes",
    "description": "Durable and comfortable running shoes for fitness enthusiasts.",
    "price": 89.99,
    "category": "Sportswear",
    "brand": "FitTech",
    "stock": 40,
    "ratings": [{"user": "alex_wong", "rating": 4.2}],
    "reviews": [{"user": "alex_wong", "comment": "Good support for long runs."}],
    "image_url": "https://example.com/running-shoes.jpg"
  },
  {
    "productId":5,
    "name": "HD Smart TV",
    "description": "Immersive entertainment with high-definition smart TV.",
    "price": 899.99,
    "category": "Electronics",
    "brand": "TechVision",
    "stock": 25,
    "ratings": [{"user": "olivia_miller", "rating": 4.9}],
    "reviews": [{"user": "olivia_miller", "comment": "Crystal clear picture quality!"}],
    "image_url": "https://example.com/hd-smart-tv.jpg"
  },
  {
    "productId":6,
    "name": "Designer Watch",
    "description": "Elegant and stylish designer watch for any occasion.",
    "price": 299.99,
    "category": "Accessories",
    "brand": "FashionElite",
    "stock": 35,
    "ratings": [{"user": "john_doe", "rating": 4.6}],
    "reviews": [{"user": "john_doe", "comment": "Classy design, worth the price."}],
    "image_url": "https://example.com/designer-watch.jpg"
  },
  {
    "productId":7,
    "name": "Coffee Maker",
    "description": "Enjoy freshly brewed coffee with this modern coffee maker.",
    "price": 69.99,
    "category": "Appliances",
    "brand": "KitchenTech",
    "stock": 15,
    "ratings": [{"user": "sophia_roberts", "rating": 4.0}],
    "reviews": [{"user": "sophia_roberts", "comment": "Easy to use and clean."}],
    "image_url": "https://example.com/coffee-maker.jpg"
  },
  {
    "productId":8,
    "name": "Gaming Console",
    "description": "Next-gen gaming console for an ultimate gaming experience.",
    "price": 449.99,
    "category": "Electronics",
    "brand": "GameMaster",
    "stock": 20,
    "ratings": [{"user": "ryan_clark", "rating": 4.8}],
    "reviews": [{"user": "ryan_clark", "comment": "Graphics and speed are amazing!"}],
    "image_url": "https://example.com/gaming-console.jpg"
  },
  {
    "productId":9,
    "name": "Outdoor Grill",
    "description": "Premium outdoor grill for barbecue enthusiasts.",
    "price": 249.99,
    "category": "Outdoor",
    "brand": "GrillMasters",
    "stock": 10,
    "ratings": [{"user": "zoey_turner", "rating": 4.5}, {"user": "jackson_wells", "rating": 4.6}],
    "reviews": [{"user": "zoey_turner", "comment": "Best grill I've ever owned!"}, {"user": "jackson_wells", "comment": "Easy to set up and spacious."}],
    "image_url": "https://example.com/outdoor-grill.jpg"
  },
  {
    "productId":10,
    "name": "Wireless Earbuds",
    "description": "Compact and wireless earbuds for on-the-go music lovers.",
    "price": 79.99,
    "category": "Electronics",
    "brand": "AudioTech",
    "stock": 30,
    "ratings": [{"user": "john_doe", "rating": 4.2}],
    "reviews": [{"user": "john_doe", "comment": "Good sound quality and comfortable."}],
    "image_url": "https://example.com/wireless-earbuds.jpg"
  },
  {
    "productId":11,
    "name": "Digital Camera",
    "description": "Capture stunning moments with this high-resolution digital camera.",
    "price": 599.99,
    "category": "Electronics",
    "brand": "PhotoPro",
    "stock": 15,
    "ratings": [{"user": "ava_jackson", "rating": 4.9}],
    "reviews": [{"user": "ava_jackson", "comment": "Amazing picture quality!"}],
    "image_url": "https://example.com/digital-camera.jpg"
  },
  {
    "productId":12,
    "name": "Backpacker's Tent",
    "description": "Lightweight and durable tent for backpacking adventures.",
    "price": 129.99,
    "category": "Outdoor",
    "brand": "AdventureGear",
    "stock": 25,
    "ratings": [],
    "reviews": [],
    "image_url": "https://example.com/backpackers-tent.jpg"
  },
  {
    "productId":13,
    "name": "Home Security Camera",
    "description": "Keep your home secure with this smart security camera.",
    "price": 149.99,
    "category": "Electronics",
    "brand": "SafeGuard",
    "stock": 20,
    "ratings": [],
    "reviews": [],
    "image_url": "https://example.com/home-security-camera.jpg"
  },
  {
    "productId":14,
    "name": "Professional Blender",
    "description": "Blend your favorite smoothies with this powerful blender.",
    "price": 399.99,
    "category": "Appliances",
    "brand": "KitchenPro",
    "stock": 15,
    "ratings": [{"user": "ava_jackson", "rating": 4.3},{"user": "amelia_brooks", "rating": 4.7}],
    "reviews": [{"user": "ava_jackson", "comment": "Works like a charm!"},{"user": "amelia_brooks", "comment": "Good!"}],
    "image_url": "https://example.com/professional-blender.jpg"
  },
  {
    "productId":15,
    "name": "Leather Handbag",
    "description": "Fashionable leather handbag for a stylish look.",
    "price": 179.99,
    "category": "Accessories",
    "brand": "Fashionista",
    "stock": 25,
    "ratings": [{"user": "olivia_lee", "rating": 4.8}],
    "reviews": [{"user": "olivia_lee", "comment": "Perfect size and great quality!"}],
    "image_url": "https://example.com/leather-handbag.jpg"
  }
]


products.forEach(async function(obj){
  await db.collection("assignment-products").doc(obj.productId.toString()).set(obj).then(async docRef => {
    console.log("'"+docRef.id+"',")
   })
});



