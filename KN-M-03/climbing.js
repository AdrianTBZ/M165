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

db.Route.insertOne({
    _id: route1Id,
    name: "Der Überhang",
    length: 15.5,
    difficulty: "6a+",
    hallID: "hall1Id"
});

db.Route.insertMany([
    {
        _id: route2Id,
        name: "Direkter Weg",
        length: 12.0,
        difficulty: "5c",
        hallID: "hall1Id"
    },
    {
        _id: route3Id,
        name: "Dächer Route",
        length: 18.0,
        difficulty: "7b",
        hallID: "hall2Id"
    },
    {
        _id: route4Id,
        name: "Anfänger Kante",
        length: 10.0,
        difficulty: "4b",
        hallID: "hall3Id"
    }
]);

db.ClimbingHall.insertMany([
    {
        _id: hall1Id,
        name: "6a plus",
        adress: "Klosterstrasse 17, 8406 Winterthur",
        availableEquipment: [
            {
        id: equipment1h1Id,
        typ: "Kletterschuhe",
        price: 5.00
    },
    {
        id: equipmenth12Id,
        typ: "Klettergurt",
        price: 4.00
    },
    {
        id: equipmenth14Id,
        typ: "Chalk Bag",
        price: 3.00
    }
        ],
        climbers: [climber1Id, climber2Id, climber3Id]
    },
    {
        _id: hall2Id,
        name: "GRIFFIG",
        adress: "Aathalstrasse 84, 8610 Uster",
        availableEquipment: [
            {
        id: equipmenth21Id,
        typ: "Kletterschuhe",
        price: 5.00
    },
    {
        id: equipmenth22Id,
        typ: "Klettergurt",
        price: 4.00
    },
    {
        id: equipmenth23Id,
        typ: "Karabiner",
        price: 2.50
    },
    {
        id: equipmenth25Id,
        typ: "Seil 60m",
        price: 8.00
    },
        ],
        climbers: [climber1Id, climber4Id]
    },
    {
        _id: hall3Id,
        name: "Boulderlounge",
        adress: "Zürcherstrasse 109, 8952 Schlieren",
        availableEquipment: [
            {
        id: equipmenth31Id,
        typ: "Kletterschuhe",
        price: 5.00
    },
    {
        id: equipmenth32Id,
        typ: "Klettergurt",
        price: 4.00
    },
    {
        id: equipmenth33Id,
        typ: "Karabiner",
        price: 2.50
    },
    {
        id: equipmenth34Id,
        typ: "Chalk Bag",
        price: 3.00
    },
    {
        id: equipmenth35Id,
        typ: "Seil 60m",
        price: 8.00
    }
        ],
        climbers: [climber2Id, climber3Id, climber4Id]
    }
]);

db.Climbers.insertMany([
    {
        _id: climber1Id,
        name: "Marco Matteo",
        age: 28,
        equipmentID: [
            {
        _id: equipmentc11Id,
        typ: "Kletterschuhe",
        price: 129.99
    },
    {
        _id: equipmentc12Id,
        typ: "Klettergurt",
        price: 79.99
    },
    {
        _id: equipmentc14Id,
        typ: "Chalk Bag",
        price: 19.99
    },
        ],
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
        rent: [equipment3Id]
    },
    {
        _id: climber2Id,
        name: "Sandro Kossel",
        age: 32,
        equipmentID: [
            {
        _id: equipmentc21Id,
        typ: "Kletterschuhe",
        price: 129.99
    },
    {
        _id: equipmentc22Id,
        typ: "Klettergurt",
        price: 79.99
    },
        ],
        completedRoutes: [
            {
                routeID: route3Id,
                date: new Date("2023-09-22"),
                difficulty: "7b"
            }
        ],
        rent: [equipment4Id, equipment5Id]
    },
    {
        _id: climber3Id,
        name: "Mario Traub",
        age: 25,
        equipmentID: [
            {
        _id: equipmentc31Id,
        typ: "Kletterschuhe",
        price: 129.99
    },
        ],
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
        rent: [equipment2Id, equipment3Id]
    },
    {
        _id: climber4Id,
        name: "Colin Piguet",
        age: 29,
        equipmentID: [
            {
        _id: equipmentc41Id,
        typ: "Kletterschuhe",
        price: 129.99
    },
    {
        _id: equipmentc42Id,
        typ: "Klettergurt",
        price: 79.99
    },
    {
        _id: equipmentc43Id,
        typ: "Karabiner",
        price: 14.99
    },
    {
        _id: equipmentc44Id,
        typ: "Chalk Bag",
        price: 19.99
    },
        ],
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
        rent: []
    }
]);