const equipment1Id = ObjectId();
const equipment2Id = ObjectId();
const equipment3Id = ObjectId();
const equipment4Id = ObjectId();
const equipment5Id = ObjectId();

const route1Id = ObjectId();
const route2Id = ObjectId();
const route3Id = ObjectId();
const route4Id = ObjectId();

const climber1Id = ObjectId();
const climber2Id = ObjectId();
const climber3Id = ObjectId();
const climber4Id = ObjectId();

const hall1Id = ObjectId();
const hall2Id = ObjectId();
const hall3Id = ObjectId();

db.Equipment.insertMany([
    {
        _id: equipment1Id,
        typ: "Kletterschuhe",
        price: 129.99
    },
    {
        _id: equipment2Id,
        typ: "Klettergurt",
        price: 79.99
    },
    {
        _id: equipment3Id,
        typ: "Karabiner",
        price: 14.99
    },
    {
        _id: equipment4Id,
        typ: "Chalk Bag",
        price: 19.99
    },
    {
        _id: equipment5Id,
        typ: "Seil 60m",
        price: 159.99
    }
]);

db.Route.insertOne({
    _id: route1Id,
    name: "Der Überhang",
    length: 15.5,
    difficulty: "6a+"
});

db.Route.insertMany([
    {
        _id: route2Id,
        name: "Direkter Weg",
        length: 12.0,
        difficulty: "5c"
    },
    {
        _id: route3Id,
        name: "Dächer Route",
        length: 18.0,
        difficulty: "7b"
    },
    {
        _id: route4Id,
        name: "Anfänger Kante",
        length: 10.0,
        difficulty: "4b"
    }
]);

db.ClimbingHall.insertMany([
    {
        _id: hall1Id,
        name: "6a plus",
        adress: "Klosterstrasse 17, 8406 Winterthur",
        availableEquipment: [equipment1Id, equipment2Id, equipment4Id],
        climbers: [climber1Id, climber2Id, climber3Id]
    },
    {
        _id: hall2Id,
        name: "GRIFFIG",
        adress: "Aathalstrasse 84, 8610 Uster",
        availableEquipment: [equipment1Id, equipment2Id, equipment3Id, equipment5Id],
        climbers: [climber1Id, climber4Id]
    },
    {
        _id: hall3Id,
        name: "Boulderlounge",
        adress: "Zürcherstrasse 109, 8952 Schlieren",
        availableEquipment: [equipment1Id, equipment2Id, equipment3Id, equipment4Id, equipment5Id],
        climbers: [climber2Id, climber3Id, climber4Id]
    }
]);

db.Climbers.insertMany([
    {
        _id: climber1Id,
        name: "Marco Matteo",
        age: 28,
        equipmentID: [equipment1Id, equipment2Id, equipment4Id],
        completedRoutes: [
            {
                routeID: route1Id,
                date: new Date("2023-10-15"),
                difficulty: "6a+"
            },
            {
                routeID: route2Id,
                date: new Date("2023-11-03"),
                difficulty: "5c"
            }
        ],
        equipment: [equipment1Id, equipment2Id, equipment4Id],
        rent: [equipment3Id]
    },
    {
        _id: climber2Id,
        name: "Sandro Kossel",
        age: 32,
        equipmentID: [equipment1Id, equipment2Id],
        completedRoutes: [
            {
                routeID: route3Id,
                date: new Date("2023-09-22"),
                difficulty: "7b"
            }
        ],
        equipment: [equipment1Id, equipment2Id],
        rent: [equipment4Id, equipment5Id]
    },
    {
        _id: climber3Id,
        name: "Mario Traub",
        age: 25,
        equipmentID: [equipment1Id],
        completedRoutes: [
            {
                routeID: route4Id,
                date: new Date("2023-12-05"),
                difficulty: "4b"
            },
            {
                routeID: route2Id,
                date: new Date("2023-12-10"),
                difficulty: "5c"
            },
            {
                routeID: route1Id,
                date: new Date("2024-01-15"),
                difficulty: "6a+"
            }
        ],
        equipment: [equipment1Id],
        rent: [equipment2Id, equipment3Id]
    },
    {
        _id: climber4Id,
        name: "Colin Piguet",
        age: 29,
        equipmentID: [equipment1Id, equipment2Id, equipment3Id, equipment4Id],
        completedRoutes: [
            {
                routeID: route2Id,
                date: new Date("2023-08-18"),
                difficulty: "5c"
            },
            {
                routeID: route3Id, 
                date: new Date("2023-10-30"),
                difficulty: "7b"
            }
        ],
        equipment: [equipment1Id, equipment2Id, equipment3Id, equipment4Id],
        rent: []
    }
]);

db.availableEquipment.insertMany([
    {
        _id: ObjectId(),
        id: equipment1Id,
        typ: "Kletterschuhe",
        price: 5.00
    },
    {
        _id: ObjectId(),
        id: equipment2Id,
        typ: "Klettergurt",
        price: 4.00
    },
    {
        _id: ObjectId(),
        id: equipment3Id,
        typ: "Karabiner",
        price: 2.50
    },
    {
        _id: ObjectId(),
        id: equipment4Id,
        typ: "Chalk Bag",
        price: 3.00
    },
    {
        _id: ObjectId(),
        id: equipment5Id,
        typ: "Seil 60m",
        price: 8.00
    }
]);