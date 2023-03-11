const person = [
  {
    _id: "640b462d60ac472d62124fb0",
    isActive: true,
    age: 33,
    eyeColor: "blue",
    name: "June Ruiz",
    gender: "female",
    favoriteFruit: "strawberry",
  },
  {
    _id: "640b462d35d123862a1abd7e",
    isActive: false,
    age: 35,
    eyeColor: "brown",
    name: "Haley Burch",
    gender: "male",
    favoriteFruit: "apple",
  },
  {
    _id: "640b462d45d2c850b9217a29",
    isActive: false,
    age: 38,
    eyeColor: "green",
    name: "Hughes Vaughn",
    gender: "male",
    favoriteFruit: "apple",
  },
  {
    _id: "640b462de12a1f3b04a36b4f",
    isActive: true,
    age: 33,
    eyeColor: "blue",
    name: "Lora Jordan",
    gender: "female",
    favoriteFruit: "strawberry",
  },
  {
    _id: "640b462d67e08a654511cb4e",
    isActive: true,
    age: 27,
    eyeColor: "green",
    name: "Tillman Finch",
    gender: "male",
    favoriteFruit: "apple",
  },
  {
    _id: "640b462d0b0e74ee8bd205a6",
    isActive: true,
    age: 22,
    eyeColor: "brown",
    name: "Chavez Foster",
    gender: "male",
    favoriteFruit: "banana",
  },
  {
    _id: "640b462da8a57a94bc72abd2",
    isActive: false,
    age: 29,
    eyeColor: "brown",
    name: "Mullen Riddle",
    gender: "male",
    favoriteFruit: "strawberry",
  },
  {
    _id: "640b462d9858514d5b6c18b9",
    isActive: true,
    age: 34,
    eyeColor: "blue",
    name: "Coffey Garza",
    gender: "male",
    favoriteFruit: "banana",
  },
  {
    _id: "640b462d2375980e9c3f4ba6",
    isActive: true,
    age: 36,
    eyeColor: "blue",
    name: "Harris Lee",
    gender: "male",
    favoriteFruit: "apple",
  },
  {
    _id: "640b462dc8e85fc87fa163f6",
    isActive: false,
    age: 35,
    eyeColor: "green",
    name: "Le Gallegos",
    gender: "male",
    favoriteFruit: "strawberry",
  },
  {
    _id: "640b462d34b76ce4a2f0f43c",
    isActive: false,
    age: 39,
    eyeColor: "brown",
    name: "Angelia Randall",
    gender: "female",
    favoriteFruit: "strawberry",
  },
  {
    _id: "640b462d58811f4099e3a8e5",
    isActive: false,
    age: 25,
    eyeColor: "green",
    name: "Holden Whitley",
    gender: "male",
    favoriteFruit: "banana",
  },
  {
    _id: "640b462d0438e6c18d62fb55",
    isActive: true,
    age: 29,
    eyeColor: "green",
    name: "Mcfadden James",
    gender: "male",
    favoriteFruit: "apple",
  },
  {
    _id: "640b462de5534ed0fe524f5a",
    isActive: true,
    age: 27,
    eyeColor: "blue",
    name: "Bernadette Delgado",
    gender: "female",
    favoriteFruit: "strawberry",
  },
];

console.log(person.length);

// 1) print person yang suka buah apple dan warna mata nya biru
for (let i = 0; i < person.length; i++) {
  if (person[i].eyeColor === "blue" && person[i].favoriteFruit === "apple") {
    console.log(person[i].name);
  }
}

// 2) print berapa person yang age nya diatas 30
for (let i = 0; i < person.length; i++) {
  if (person[i].age > 30) {
    console.log(person[i].name);
  }
}

// 3) print person yang isActive true and  gender nya female
for (let i = 0; i < person.length; i++) {
  if (person[i].isActive === true && person[i].gender === "female") {
    console.log(person[i].name);
  }
}

// 4) print yang age nya diatas 30 atau dibawah 25 dan eyeColor nya blue
for (let i = 0; i < person.length; i++) {
  if (person[i].age > 30 || (person[i].age < 25 && person[i].eyeColor === "blue")) {
    console.log(person[i].name);
  }
}

// 5) print person yang mengandung huruf W di name nya
for (let i = 0; i < person.length; i++) {
  let names = person[i].name.split("");
  for (let j = 0; j < names.length; j++) {
    if (names[j] === "w" || names[j] === "W") {
      console.log(person[i].name);
    }
  }
}

// 6) print person isActive false dan gender nya male dan age nya diatas 25
for (let i = 0; i < person.length; i++) {
  if (person[i].isActive === false && person[i].gender === "male" && person[i].age > 25) {
    console.log(person[i].name);
  }
}

// 7) print person age nya dibawah 30 atau eyeColor brown dan favoritFruit nya banana
for (let i = 0; i < person.length; i++) {
  if (person[i].age < 30 || (person[i].eyeColor === "brown" && person[i].favoriteFruit === "banana")) {
    console.log(person[i].name);
  }
}

// 8) print person gender male
for (let i = 0; i < person.length; i++) {
  if (person[i].gender === "male") {
    console.log(person[i].name);
  }
}

// 9) print person eyeColor Blue
for (let i = 0; i < person.length; i++) {
  if (person[i].eyeColor === "blue") {
    console.log(person[i].name);
  }
}

// 10) print person age diatas 30
for (let i = 0; i < person.length; i++) {
  if (person[i].age > 30) {
    console.log(person[i].name);
  }
}
