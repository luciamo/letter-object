export function httpGet(from) {
  return fetch(from)
    .then(res => res.json())
    .then(
      (result) => result,
      (error) => error
    );
}

export function formatUsers(users) {
  const formattedUsers = {};

  users.forEach(
    function(user) {
      const {address, company, ...userInfo} = user;
      formattedUsers[user.id] = {
        ...userInfo,
        address: `${address.street}, ${address.suite} - ${address.zipcode} ${address.city}`,
        company: company.name,
        posts: []
      }
  });

  return formattedUsers;
}

export function addPostsToUsers(users, posts) {
  posts.forEach(post => {
    const {userId, ...postBody} = post;
    users[post.userId].posts.push(postBody)
  });

  return users;
}
