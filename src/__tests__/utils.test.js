import { addPostsToUsers, formatUsers } from "../utils"
import { testUsers, formattedUsers, formattedUsersWithPosts, testPosts } from "../samples/userData"

describe("Format the users", () => {
  it("returns the users with the correct formatting", () => {
    expect(formatUsers(testUsers)).toMatchObject(formattedUsers);
  })
})

describe("Add posts to users objects", () => {
  it("returns the array of users with the respective posts", () => {
    expect(addPostsToUsers(formattedUsers, testPosts)).toMatchObject(formattedUsersWithPosts)
  })
})
