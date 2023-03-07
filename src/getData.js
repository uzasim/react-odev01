import axios from "axios";

export default async function getData(Number) {
  let userData = (await axios.get(`https://jsonplaceholder.typicode.com/users/${Number}`)).data;

  let postData = (await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${Number}`))
    .data;

  let data = { ...userData, posts: postData };

  return data;
}
