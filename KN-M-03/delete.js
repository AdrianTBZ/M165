// Alle Collections löschen

db.Route.drop();
db.ClimbingHall.drop();
db.Climbers.drop();

// Ein Datensatz löschen
db.Equipment.deleteOne({ _id: equipmenth25Id._id });

// Mehrere ids löschen
db.Route.deleteMany({
    $or: [
        { _id: route1Id._id },
        { _id: route2Id._id }
    ]
});