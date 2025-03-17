# Aufgabe A

## [Climbing.js](climbing.js)

![Aufgabe A](Images/Aufgabe_A.png)

# Aufgabe B

## Alle Collections löschten
```
db.Route.drop();
db.ClimbingHall.drop();
db.Climbers.drop();
```

## Daten teilweise löschten
```
db.Equipment.deleteOne({ _id: equipment1._id });

db.Route.deleteMany({
    $or: [
        { _id: route1._id },
        { _id: route2._id }
    ]
});
```

![delete_one](Images/delete_one.png)
![delete_many](Images/delete_many.png)

# Aufgabe C

## [Find.js](find.js)
![find](Images/find.png)

# Aufgabe D

## [Update.js](update.js)
![update](Images/update.png)