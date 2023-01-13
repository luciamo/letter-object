import { httpGet, formatUsers, addPostsToUsers } from "./utils";

export default class Letter {
  async get() {
    const users = await httpGet("https://jsonplaceholder.typicode.com/users");
    const posts = await httpGet("https://jsonplaceholder.typicode.com/posts");

    let formattedUsers = formatUsers(users);
    formattedUsers = addPostsToUsers(formattedUsers, posts);

    return Object.keys(formattedUsers).map(key => formattedUsers[key]);
  }
}
