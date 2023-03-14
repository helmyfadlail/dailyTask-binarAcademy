// wajib ada yang menggunakan array method FIND, FILTER atau MAP dalam pengerjaannya.
let persons = [
  {
    _id: "641041df489e515c93f7ee1a",
    age: 27,
    eyeColor: "green",
    name: "Ayers Gill",
    address: "Bali",
    registered: "2022-05-17T08:02:28 -07:00",
    friends: [
      {
        id: 0,
        name: "Theresia",
        isActive: false,
        favoriteFruit: "apple",
        gender: "male",
        hobby: [
          {
            id: 2,
            hobby: "basketball",
          },
          {
            id: 1,
            hobby: "baseball",
          },
        ],
      },
      {
        id: 1,
        name: "Shifly",
        isActive: true,
        favoriteFruit: "strawberry",
        gender: "male",
        hobby: [
          {
            id: 2,
            hobby: "basketball",
          },
          {
            id: 2,
            hobby: "baseball",
          },
        ],
      },
      {
        id: 2,
        name: "Farid",
        isActive: false,
        favoriteFruit: "apple",
        gender: "male",
        hobby: [
          {
            id: 2,
            hobby: "baseball",
          },
          {
            id: 2,
            hobby: "basketball",
          },
        ],
      },
    ],
  },
  {
    _id: "641041df548e59db79013f8f",
    age: 32,
    eyeColor: "blue",
    name: "Jeanie Randolph",
    address: "Jakarta",
    registered: "2022-05-31T09:24:02 -07:00",
    friends: [
      {
        id: 0,
        name: "Shifly",
        isActive: true,
        favoriteFruit: "banana",
        gender: "female",
        hobby: [
          {
            id: 1,
            hobby: "basketball",
          },
          {
            id: 2,
            hobby: "basketball",
          },
        ],
      },
      {
        id: 1,
        name: "Farid",
        isActive: true,
        favoriteFruit: "apple",
        gender: "female",
        hobby: [
          {
            id: 2,
            hobby: "baseball",
          },
          {
            id: 2,
            hobby: "football",
          },
        ],
      },
      {
        id: 2,
        name: "Shifly",
        isActive: true,
        favoriteFruit: "strawberry",
        gender: "female",
        hobby: [
          {
            id: 1,
            hobby: "basketball",
          },
          {
            id: 1,
            hobby: "baseball",
          },
        ],
      },
    ],
  },
  {
    _id: "641041df0959437237bc4182",
    age: 21,
    eyeColor: "brown",
    name: "Maldonado Mckee",
    address: "Bandung",
    registered: "2021-10-11T03:00:09 -07:00",
    friends: [
      {
        id: 0,
        name: "Theresia",
        isActive: false,
        favoriteFruit: "strawberry",
        gender: "male",
        hobby: [
          {
            id: 1,
            hobby: "football",
          },
          {
            id: 2,
            hobby: "football",
          },
        ],
      },
      {
        id: 1,
        name: "Farid",
        isActive: false,
        favoriteFruit: "banana",
        gender: "male",
        hobby: [
          {
            id: 2,
            hobby: "basketball",
          },
          {
            id: 2,
            hobby: "basketball",
          },
        ],
      },
      {
        id: 2,
        name: "Farid",
        isActive: false,
        favoriteFruit: "banana",
        gender: "male",
        hobby: [
          {
            id: 1,
            hobby: "basketball",
          },
          {
            id: 2,
            hobby: "football",
          },
        ],
      },
    ],
  },
  {
    _id: "641041df00f235a08325d1ee",
    age: 21,
    eyeColor: "blue",
    name: "Nora Butler",
    address: "Jakarta",
    registered: "2023-01-04T07:28:17 -07:00",
    friends: [
      {
        id: 0,
        name: "Farid",
        isActive: true,
        favoriteFruit: "banana",
        gender: "female",
        hobby: [
          {
            id: 1,
            hobby: "football",
          },
          {
            id: 1,
            hobby: "football",
          },
        ],
      },
      {
        id: 1,
        name: "Farid",
        isActive: true,
        favoriteFruit: "strawberry",
        gender: "female",
        hobby: [
          {
            id: 1,
            hobby: "football",
          },
          {
            id: 1,
            hobby: "football",
          },
        ],
      },
      {
        id: 2,
        name: "Theresia",
        isActive: false,
        favoriteFruit: "banana",
        gender: "female",
        hobby: [
          {
            id: 2,
            hobby: "basketball",
          },
          {
            id: 2,
            hobby: "basketball",
          },
        ],
      },
    ],
  },
  {
    _id: "641041dfba47a576fa48a618",
    age: 39,
    eyeColor: "brown",
    name: "Roberts Dunn",
    address: "Bandung",
    registered: "2021-01-03T01:49:00 -07:00",
    friends: [
      {
        id: 0,
        name: "Theresia",
        isActive: true,
        favoriteFruit: "strawberry",
        gender: "male",
        hobby: [
          {
            id: 1,
            hobby: "basketball",
          },
          {
            id: 2,
            hobby: "baseball",
          },
        ],
      },
      {
        id: 1,
        name: "Farid",
        isActive: true,
        favoriteFruit: "apple",
        gender: "male",
        hobby: [
          {
            id: 2,
            hobby: "basketball",
          },
          {
            id: 1,
            hobby: "football",
          },
        ],
      },
      {
        id: 2,
        name: "Shifly",
        isActive: false,
        favoriteFruit: "apple",
        gender: "male",
        hobby: [
          {
            id: 2,
            hobby: "basketball",
          },
          {
            id: 2,
            hobby: "football",
          },
        ],
      },
    ],
  },
];
// console.log(persons.length);

console.log("1). display/print person yang registered dibawah tahun 2022");
for (let i = 0; i < persons.length; i++) {
  let year = persons[i].registered.split("-");
  for (let j = 0; j < year.length; j++) {
    if (year[0] < "2022") {
      console.log(persons[i].name);
      break;
    }
  }
}

console.log("2). display person yang address nya Bali");
persons.map((i) => (i.address === "Bali" ? console.log(`${i.name} dari Bali`) : ""));

console.log("3). display friends yang hobby nya football:");
persons.filter((i) => i.friends.filter((j) => j.hobby.filter((k) => (k.hobby === "football" ? console.log(`${i.name} punya teman bernama ${j.name} yang mempunyai hobby ${k.hobby}`) : ""))));

console.log("4). display hobby dari friends id 2:");
persons.map((i) => i.friends.map((j) => (j.id === 2 ? j.hobby.map((k) => console.log(`${i.name} punya teman yang ber-id ${j.id} yang hobbynya ${k.hobby}`)) : "")));

console.log("5). display friends yang gender nya male dan mempunyai hobby basketball:");
persons.filter((i) => i.friends.filter((j) => j.gender === "male" && j.hobby.filter((k) => (k.hobby === "basketball" ? console.log(`${i.name} punya teman ${j.name} yang sesuai kriteria`) : ""))));

console.log("6). display friends yang isActive nya true dan gender nya female dan favorite fruit nya strawberry:");
persons.filter((i) =>
  i.friends.filter((j) => (j.isActive === true && j.gender === "female" && j.favoriteFruit === "strawberry" ? console.log(`${i.name} punya teman ${j.name} yang sesuai kriteria`) : ""))
);

console.log("7). display siapa saja yang mempunyai teman name Theresia:");
persons.find((i) => i.friends.find((j) => (j.name === "Theresia" ? console.log(i.name) : "")));

console.log("8). display hobby id 1 dari friends yang isActive nya true:");
persons.map((i) => i.friends.map((j) => j.isActive === true && j.hobby.map((k) => (k.id === 1 ? console.log(`${j.name} punya hobby yaitu ${k.hobby}`) : ""))));

console.log("9). display person yang eye color nya brown dan favorite fruit nya banana dan mempunyai teman hobby basketball:");
persons.find((i) => i.eyeColor === "brown" && i.friends.find((j) => j.favoriteFruit === "banana" && j.hobby.map((k) => (k.hobby === "basketball" ? console.log(i.name) : ""))));

console.log("10). display person yang mempunya friends gender male atau favorite fruit nya banana dan registered di tahun 2023:");
persons.find((i) => i.registered.includes("2023") && i.friends.find((j) => (j.gender === "male" || j.favoriteFruit === "banana" ? console.log(i.name) : "")));
