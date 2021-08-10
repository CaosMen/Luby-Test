import axios from 'axios';

const api = axios.create({
  method: 'GET',
  baseURL: 'https://api.github.com'
});

export async function GetUser(username) {
  try {
    let response = await api.get('/users/' + username);
    return {data: response.data, status: 200};
  } catch(error) {
    return {data: error, status: 404};
  }
}

export async function GetFollowers(username) {
  try {
    let response = await api.get('/users/' + username + '/followers?per_page=100');
    return {data: response.data, status: 200};
  } catch(error) {
    return {data: error, status: 404};
  }
}

export async function GetFollowing(username) {
  try {
    let response = await api.get('/users/' + username + '/following?per_page=100');
    return {data: response.data, status: 200};
  } catch(error) {
    return {data: error, status: 404};
  }
}

export async function GetRepository(username) {
  try {
    let response = await api.get('/users/' + username + '/repos?per_page=100');
    return {data: response.data, status: 200};
  } catch(error) {
    return {data: error, status: 404};
  }
}