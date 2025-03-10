// Alle Collections löschen

db.Equipment.drop();
db.Route.drop();
db.ClimbingHall.drop();
db.Climbers.drop();
db.availableEquipment.drop();

// Ein Datensatz löschen
db.Equipment.deleteOne({ _id: equipment1._id });

// Mehrere ids löschen
db.Route.deleteMany({
    $or: [
        { _id: route1._id },
        { _id: route2._id }
    ]
});