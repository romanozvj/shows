export function get(model) {
    return fetch(`https://api.infinum.academy/api/${model}`)
        .then((res) => res.json())
        .then((res) => res.data);
}

function isJson(value) {
    try {
        JSON.parse(value);
    }
    catch (e) {
        return false;
    }
    return true;
}

export function post(model, data, token) {
    const headers = {};
    if (isJson(data)) headers['Content-Type'] = 'application/json';
    if(token) headers['Authorization'] = token;
    return fetch(`https://api.infinum.academy/api/${model}`, {
        method: 'POST',
        headers: headers,
        body: data,
    })
        .then((res) => res.json())
        .then((res) => res.data)
        .catch((res) => console.log(res));
}

export function deleteRequest(model, token) {
    return fetch(`https://api.infinum.academy/api/${model}`, {
        method: 'DELETE',
        headers: {
            'Authorization': token
        }
    })
        .then((res) => res.json())
        .then((res) => res.data)
        .catch((res) => console.log(res));
}