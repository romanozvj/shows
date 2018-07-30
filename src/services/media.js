import { postAuth } from './api';

export function uploadFile(data, loginToken) {
    return postAuth('media', data, loginToken);
}