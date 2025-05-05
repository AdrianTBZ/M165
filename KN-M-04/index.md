# Aufgabe A

## $match
```
db.Route.aggregate([
  { $match: { length: { $gte: 12 } } },
  { $match: { length: { $lte: 16 } } }
]);
```
![match](Images/match.png)

## $match, $project, $sort

```
db.Climbers.aggregate([
  { $match: { age: { $gt: 25 } } },
  { $project: { _id: 0, name: 1, age: 1 } },
  { $sort: { age: 1 } }
]);
```
![sort](Images/match_project_sort.png)


## $sum

```
db.Climbers.aggregate([
  { 
    $group: { 
      _id: "$age",
      count: { $sum: 1 }
    } 
  }
]);
```
![sum](Images/sum.png)

## $group

```
db.Route.aggregate([
  { 
    $group: { 
      _id: "$difficulty",
      avgLength: { $avg: "$length" }
    } 
  }
]);

```	
![group](Images/group.png)


# Aufgabe B

## join

```
db.Route.aggregate([
  {
    $lookup: {
      from: "ClimbingHall",
      localField: "hallID",
      foreignField: "_id",
      as: "hallDetails"
    }
  },
  {
    $project: {
      _id: 1,
      name: 1,
      length: 1,
      difficulty: 1,
      "hallDetails.name": 1,
      "hallDetails.adress": 1
    }
  }
])
```

![join](Images/join_lookup.png)

## $lookup

```
db.Climbers.aggregate([
  {
    $lookup: {
      from: "Route",
      localField: "completedRoutes.routeID",
      foreignField: "_id",
      as: "routenDetails"
    }
  },
  {
    $match: {
      "routenDetails.difficulty": { $gte: "6a+" }
    }
  },
  {
    $addFields: {
      "anzahlRouten": { $size: "$routenDetails" },
      "gesamtKletterlänge": { $sum: "$routenDetails.length" }
    }
  },
  {
    $project: {
      "name": 1,
      "age": 1,
      "anzahlRouten": 1,
      "gesamtKletterlänge": 1,
      "schwierigsteRoute": { $max: "$routenDetails.difficulty" }
    }
  },
  {
    $sort: { "gesamtKletterlänge": -1 }
  }
])
```

![lookup](Images/lookup.png)


# Aufgabe C

## Einzelne Felder der Unterdokumente
```
db.Climbers.find({}, 
  { 
    "name": 1, 
    "equipmentID.typ": 1, 
    "equipmentID.price": 1,
    "_id": 0 
  }
)
```

![Einzelne Felder](Images/einzelne_Felder_Unterdokumente.png)


## Unterdokumente filtern

```	
db.Climbers.find(
  { 
    "equipmentID": { 
      $elemMatch: { 
        "typ": "Kletterschuhe", 
        "price": { $gt: 100 } 
      } 
    } 
  },
  {
    "name": 1,
    "equipmentID.$": 1
  }
)
```

![Unterdokumente filtern](Images/Unterdokumente_filtern.png)


## $unwind

```
db.Climbers.aggregate([
  { $unwind: "$completedRoutes" },
  { 
    $project: { 
      "name": 1, 
      "route": "$completedRoutes.routeID", 
      "datum": "$completedRoutes.date", 
      "schwierigkeit": "$completedRoutes.difficulty" 
    } 
  }
])
```

![unwind](Images/unwind.png)