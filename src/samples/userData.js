export const testUsers = [
  {
    "id": 1,
    "name": "Test Tester",
    "username": "Tester",
    "email": "test@test.com",
    "address": {
      "street": "Test Street",
      "suite": "Apt. 123",
      "city": "Test",
      "zipcode": "99999-9999",
      "geo": {
        "lat": "00.0000",
        "lng": "00.0000"
      },
    },
    "phone": "1-234-567-8901 x12345",
    "website": "test.org",
    "company": {
      "name": "Test Corp",
      "catchPhrase": "A test company just for us to use testing",
      "bs": "test without fear",
    },
  },
];

export const formattedUsers = {
  "1": {
    "id": 1,
    "name": "Test Tester",
    "username": "Tester",
    "email": "test@test.com",
    "address": "Test Street, Apt. 123 - 99999-9999 Test",
    "phone": "1-234-567-8901 x12345",
    "website": "test.org",
    "company": "Test Corp",
    "posts": [],
  },
};

export const testPosts = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
];

export const formattedUsersWithPosts = {
  "1": {
    "id": 1,
    "name": "Test Tester",
    "username": "Tester",
    "email": "test@test.com",
    "address": "Test Street, Apt. 123 - 99999-9999 Test",
    "phone": "1-234-567-8901 x12345",
    "website": "test.org",
    "company": "Test Corp",
    "posts": [
      {
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      },
    ],
  },
};
