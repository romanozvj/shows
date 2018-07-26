import { post } from './api';

export function login(data) {
    return post('users/sessions', data)
        .then((res) => res.token)
        .catch((error) => console.log('Request failure ', error));
}

export function register(data) {
    return post('users', data)
        .then((res) => console.log(res))
        .catch((error) => console.log('Request failure: ', error));
}