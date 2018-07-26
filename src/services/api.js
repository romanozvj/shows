export function get(model) {
    return fetch(`https://api.infinum.academy/api/${model}`)
        .then((res) => res.json())
        .then((res) => res.data);
}

export function post(model, data) {
    return fetch(`https://api.infinum.academy/api/${model}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((res) => res.json())
        .then((res) => res.data);
}

export function postAuth(model, data, token) {
    fetch(`https://api.infinum.academy/api/${model}`, {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((res) => res.json())
        .then((res) => res.data);
}