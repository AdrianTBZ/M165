db.Climbers.updateMany(
    { 
        $or: [
            { age: { $lt: 30 } },
            { completedRoutes: { $size: 3 } }
        ]
    },
    { 
        $inc: { age: 1 },
        $set: { updatedOn: new Date() }
    }
);

db.Route.replaceOne(
    { _id: route4Id },
    {
        _id: route4Id,
        name: "Neue Anfänger Route",
        length: 11.5,
        difficulty: "4c",
        description: "Eine etwas anspruchsvollere Route für Anfänger",
        createdDate: new Date()
    }
);