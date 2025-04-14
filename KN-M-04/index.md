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