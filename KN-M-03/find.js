db.Route.find({ 
    length: { $gte: 12.0, $lte: 16.0 } 
});

db.ClimbingHall.find({ 
    name: { $regex: "er", $options: "i" } 
});

db.Climbers.find({ 
    "completedRoutes.date": { $gt: new Date("2023-12-01") } 
});

db.Climbers.find({ 
    age: { $gt: 25 },
    "completedRoutes.1": { $exists: true }
});

db.Climbers.find({}, { name: 1, age: 1 });

db.Route.find({}, { _id: 0, name: 1, difficulty: 1 });

db.ClimbingHall.find({ 
    adress: { $regex: "(Winterthur|Uster)" } 
});