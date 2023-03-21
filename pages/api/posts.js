import axios from 'axios'

function backHome() {history.back()}

export function getAllPosts() {
  return axios.get('https://jsonplaceholder.typicode.com/posts').then(res => res.data)
}

export function getPost(postId) {
  console.log("postId: ", postId.queryKey[0]);
  const id = postId.queryKey[0];
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.data)
}

export function createPost(postData) {
  return axios.post('https://jsonplaceholder.typicode.com/posts', postData).then(res => {
    console.log(res.data)
    backHome()
  })
}

export function updatePost({ id, ...postData }) {
  return axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, postData).then(res => {
    console.log(res.data)
    backHome()
  })
}

export function deletePost(postId) {
  return axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => console.log(res.data))
}