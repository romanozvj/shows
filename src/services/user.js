import { post } from './api';

export function login(data) {
    return post('users/sessions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((res) => res.token);
}

export function register(data) {
    return post('users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((res) => console.log(res))
        .catch((error) => console.log('Request failure: ', error));
}