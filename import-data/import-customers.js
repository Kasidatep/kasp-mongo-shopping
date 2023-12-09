var admin = require("firebase-admin");
const { getFirestore } = require('firebase-admin/firestore')
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "firebase-adminsdk-yluly@int305fb004-app.iam.gserviceaccount.com"
});

var db = getFirestore() ;

const customers = [
  {
    "username": "john_doe",
    "email": "john.doe@example.com",
    "password": "$2a$12$8BxE6rK8nJhgyr8VtSMtDe0q8NZ8H58ViluB52wms0acZymdPT8tW",
    "avatar_url": "https://example.com/avatar/john_doe.jpg",
    "tel": "+1234567890",
    "dob": new Date("1990-05-15T00:00:00.000Z"),
    "notification": true,
    "gender": "male",
    "address": {
      "street": "123 Main Street",
      "city": "Cityville",
      "country": "USA"
    }
  },
  {
    "username": "mary_smith",
    "email": "mary.smith@example.com",
    "password": "$2a$12$4UqB8WXCSKW5ITq9vzTO0eEsK1EJGLVdSZBY.W8vQwqZU1CbcG6S2",
    "avatar_url": "https://example.com/avatar/mary_smith.jpg",
    "tel": "+1987654321",
    "dob": new Date("1985-08-22T00:00:00.000Z"),
    "notification": true,
    "gender": "female",
    "address": {
      "street": "456 Oak Avenue",
      "city": "Townsville",
      "country": "USA"
    }
  },
  {
    "username": "emma_jones",
    "email": "emma.jones@example.com",
    "password": "$2a$12$1gQaJ.ziWdCgE5TCfweAIOIpeFhLyb/GHXhGQ6yXawg.yib8YGbJS",
    "avatar_url": "https://example.com/avatar/emma_jones.jpg",
    "tel": "+1122334455",
    "dob": new Date("1992-11-10T00:00:00.000Z"),
    "notification": false,
    "gender": "female",
    "address": {
      "street": "789 Pine Road",
      "city": "Villagetown",
      "country": "USA"
    }
  },
  {
    "username": "alex_wong",
    "email": "alex.wong@example.com",
    "password": "$2a$12$F0xciiz8/Tg8MZLrZ0u2Xe2WU3/FNHZey3r9gXosnqu0Nd6KmGGR2",
    "avatar_url": "https://example.com/avatar/alex_wong.jpg",
    "tel": "+3344556677",
    "dob": new Date("1988-04-05T00:00:00.000Z"),
    "notification": true,
    "gender": "male",
    "address": {
      "street": "987 Cedar Lane",
      "city": "Hamletville",
      "country": "USA"
    }
  },
  {
    "username": "olivia_miller",
    "email": "olivia.miller@example.com",
    "password": "$2a$12$JVufoqrLqyFwE/vFRSRYIuhsb/6EzClyR8vNt9YKBSnyD8bIKGVM6",
    "avatar_url": "https://example.com/avatar/olivia_miller.jpg",
    "tel": "+5566778899",
    "dob": new Date("1995-12-18T00:00:00.000Z"),
    "notification": true,
    "gender": "female",
    "address": {
      "street": "654 Elm Street",
      "city": "Boroughburg",
      "country": "USA"
    }
  },
  {
    "username": "daniel_knight",
    "email": "daniel.knight@example.com",
    "password": "$2a$12$FX58jE.9TJS2Q/L9bVKxGuvl6AxvG1q0MUtv.l5gDnwXBjzPShQjK",
    "avatar_url": "https://example.com/avatar/daniel_knight.jpg",
    "tel": "+1122334455",
    "dob": new Date("1993-07-01T00:00:00.000Z"),
    "notification": false,
    "gender": "male",
    "address": {
      "street": "321 Birch Avenue",
      "city": "Township",
      "country": "USA"
    }
  },
  {
    "username": "sophia_roberts",
    "email": "sophia.roberts@example.com",
    "password": "$2a$12$yYHmkxMdvmzw1YVCeIg3UeuepPWBEkXyDDCWzPge1SSGx.2dID6LK",
    "avatar_url": "https://example.com/avatar/sophia_roberts.jpg",
    "tel": "+3344556677",
    "dob": new Date("1994-03-26T00:00:00.000Z"),
    "notification": true,
    "gender": "female",
    "address": {
      "street": "210 Maple Road",
      "city": "Districtville",
      "country": "USA"
    }
  },
  {
    "username": "ryan_clark",
    "email": "ryan.clark@example.com",
    "password": "$2a$12$0rQ.L0OeKrgIzP46rNjE8uA7/KamHbOnmXjEY9GJYgZV4VvDPE2Ve",
    "avatar_url": "https://example.com/avatar/ryan_clark.jpg",
    "tel": "+1122334455",
    "dob": new Date("1991-09-14T00:00:00.000Z"),
    "notification": false,
    "gender": "male",
    "address": {
      "street": "135 Walnut Lane",
      "city": "Villagetown",
      "country": "USA"
    }
  },
  {
    "username": "zoey_turner",
    "email": "zoey.turner@example.com",
    "password": "$2a$12$9C6WNSCxxz08q8omNeBZquY3s51uggrRQIlDP7Hk8DwKJhA44rVEO",
    "avatar_url": "https://example.com/avatar/zoey_turner.jpg",
    "tel": "+3344556677",
    "dob": new Date("1993-02-28T00:00:00.000Z"),
    "notification": true,
    "gender": "female",
    "address": {
      "street": "864 Cedar Lane",
      "city": "Boroughburg",
      "country": "USA"
    }
  },
  {
    "username": "liam_hall",
    "email": "liam.hall@example.com",
    "password": "$2a$12$vdfHT.LffjUoVBB3q/lvnuL2Jj1wE8C6iWngsZu8m9VKq4NhRSHr.",
    "avatar_url": "https://example.com/avatar/liam_hall.jpg",
    "tel": "+5566778899",
    "dob": new Date("1996-06-07T00:00:00.000Z"),
    "notification": true,
    "gender": "male",
    "address": {
      "street": "279 Pine Road",
      "city": "Townsville",
      "country": "Thailand"
    }
  },
  {
    "username": "ava_jackson",
    "email": "ava.jackson@example.com",
    "password": "$2a$12$dHJlXqTQxuKglK83vyENwekVx0an/y4X9W35ZZ6EFpKj1aTVioOca",
    "avatar_url": "https://example.com/avatar/ava_jackson.jpg",
    "tel": "+1122334455",
    "dob": new Date("1997-04-30T00:00:00.000Z"),
    "notification": false,
    "gender": "female",
    "address": {
      "street": "753 Elm Street",
      "city": "Cityville",
      "country": "Thailand"
    }
  },
  {
    "username": "jackson_wells",
    "email": "jackson.wells@example.com",
    "password": "$2a$12$4cI5rKJrJpTdzY4.Nxz2Y.OytiH01qFUCfiykm0bMHH0ebM8ivN5q",
    "avatar_url": "https://example.com/avatar/jackson_wells.jpg",
    "tel": "+3344556677",
    "dob": new Date("1994-10-12T00:00:00.000Z"),
    "notification": true,
    "gender": "male",
    "address": {
      "street": "468 Main Street",
      "city": "Districtville",
      "country": "Thailand"
    }
  },
  {
    "username": "amelia_brooks",
    "email": "amelia.brooks@example.com",
    "password": "$2a$12$GufTBOn.XP5bhHKY.eyfgup1o1BKRJS54FksRU8GB1Z8xr3HhLcK6",
    "avatar_url": "https://example.com/avatar/amelia_brooks.jpg",
    "tel": "+3344556677",
    "dob": new Date("1993-06-25T00:00:00.000Z"),
    "notification": true,
    "gender": "female",
    "address": {
      "street": "902 Birch Avenue",
      "city": "Hamletville",
      "country": "Canada"
    }
  },
  {
    "username": "ethan_morris",
    "email": "ethan.morris@example.com",
    "password": "$2a$12$5KLWk4WFEFVm.2I3RxY8Ue/eq76It6FMn.IJXTt6fCzPTbMZX6TjO",
    "avatar_url": "https://example.com/avatar/ethan_morris.jpg",
    "tel": "+5566778899",
    "dob": new Date("1998-01-17T00:00:00.000Z"),
    "notification": false,
    "gender": "male",
    "address": {
      "street": "579 Oak Avenue",
      "city": "Townsville",
      "country": "Canada"
    }
  },
  {
    "username": "olivia_lee",
    "email": "olivia.lee@example.com",
    "password": "$2a$12$n6EnX19XhRXEX6E2m5OozuWYiBEKsUdy/g31FLRilwXGTIZGirSva",
    "avatar_url": "https://example.com/avatar/olivia_lee.jpg",
    "tel": "+1122334455",
    "dob": new Date("1994-12-03T00:00:00.000Z"),
    "notification": true,
    "gender": "female",
    "address": {
      "street": "146 Walnut Lane",
      "city": "Villagetown",
      "country": "Canada"
    }
  }
]


customers.forEach(async function(obj){
  await db.collection("assignment-customers").doc(obj.username).set(obj).then(async docRef => {
    console.log("'"+docRef.id+"',")
   })
});



